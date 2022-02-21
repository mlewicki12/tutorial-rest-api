
import config from 'config';
import { FilterQuery, UpdateQuery } from 'mongoose';
import { get } from 'lodash';

import Session, { SessionDocument } from '../models/session.model';
import { signJwt, verifyJwt } from '../utils/jwt.utils';
import { findUser } from './user.service';

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({
    user: userId,
    userAgent
  });

  return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.find(query).lean();
}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) {
  return Session.updateOne(query, update);
}

export async function reissueAccessToken(refreshToken: string) {
  const { decoded } = verifyJwt(refreshToken);
  if(!decoded || !get(decoded, '_id')) return undefined;

  const session = await Session.findById(get(decoded, 'session'));
  if(!session || !session.valid) return undefined;

  const user = await findUser({_id: session.user});
  if(!user) return undefined;

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenTtl') }
  );

  return accessToken;
}