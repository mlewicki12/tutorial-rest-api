
import { object, string, number, TypeOf } from 'zod';

const payload = {
  body: object({
    title: string({
      required_error: 'title is required'
    }),
    description: string({
      required_error: 'description is required'
    }).min(120, 'description should be at least 120 characters long'),
    price: number({
      required_error: 'price is required'
    }),
    image: string({
      required_error: 'image is required'
    })
  })
};

const params = {
  params: object({
    productId: string({
      required_error: 'productId is required'
    })
  })
}

export const createProductSchema = object({
  ...payload
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;

export const updateProductSchema = object({
  ...payload,
  ...params
});

export type UpdateProductInput = TypeOf<typeof updateProductSchema>;

export const deleteProductSchema = object({
  ...params
});

export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;

export const getProductSchema = object({
  ...params
});

export type GetProductInput = TypeOf<typeof getProductSchema>;