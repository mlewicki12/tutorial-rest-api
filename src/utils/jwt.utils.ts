
import jwt from 'jsonwebtoken';
import config from 'config';

const publicKey = config.get<string>('publicKey');
const privateKey = config.get<string>('privateKey');

export function signJwt(payload: Object, options?: jwt.SignOptions) {
  return jwt.sign(payload, privateKey, {
    ...options,
    algorithm: 'RS256'
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded
    };
  } catch(err: any) {
    return {
      valid: false,
      expired: err.message === 'jwt expired',
      decoded: null
    }
  }
}