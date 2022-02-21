
import { Express } from 'express';

import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controller/product.controller';
import { createUserHandler } from './controller/user.controller';
import requireUser from './middleware/requireUser';
import validate from './middleware/validateResource';
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema';
import createSessionSchema from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200));

  app.post('/api/users', validate(createUserSchema), createUserHandler);
  app.post('/api/sessions', validate(createSessionSchema), createUserSessionHandler);
  app.get('/api/sessions', requireUser, getUserSessionsHandler);
  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.post('/api/products', requireUser, validate(createProductSchema), createProductHandler);
  app.put('/api/products/:productId', requireUser, validate(updateProductSchema), updateProductHandler);
  app.get('/api/product/:productId', validate(getProductSchema), getProductHandler);
  app.delete('/api/product/:productId', requireUser, validate(deleteProductSchema), deleteProductHandler);
}

export default routes;