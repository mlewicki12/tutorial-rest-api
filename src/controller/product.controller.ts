
import { Request, Response } from 'express';
import { CreateProductInput, DeleteProductInput, GetProductInput, UpdateProductInput } from '../schema/product.schema';
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from '../service/product.service';

export async function createProductHandler(req: Request<{}, {}, CreateProductInput['body']>, res: Response) {
  const user = res.locals.user._id;
  const body = req.body;

  try {
    const product = await createProduct({...body, user: user});
    return res.send(product);
  } catch(err) {
    return res.sendStatus(500);
  }
}

export async function updateProductHandler(req: Request<UpdateProductInput['params'], {}, UpdateProductInput['body']>, res: Response) {
  const user = res.locals.user._id;
  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({productId});
  if(!product) return res.sendStatus(404);
  if(product.user !== user) return res.sendStatus(403);

  const updatedProduct = await findAndUpdateProduct({ productId }, update, { new: true });
  return res.send(updatedProduct);
}

export async function getProductHandler(req: Request<GetProductInput['params']>, res: Response) {
  const productId = req.params.productId;

  const product = await findProduct({productId});
  if(!product) return res.sendStatus(404);

  return res.send(product);
}

export async function deleteProductHandler(req: Request<DeleteProductInput['params']>, res: Response) {
  const user = res.locals.user._id;
  const productId = req.params.productId;

  const product = await findProduct({productId});
  if(!product) return res.sendStatus(404);
  if(String(product.user) !== user) return res.sendStatus(403);

  await deleteProduct({ productId });
  return res.sendStatus(200);
}