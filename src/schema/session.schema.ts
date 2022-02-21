
import { object, string } from 'zod';

const createSessionSchema = object({
  body: object({
    email: string({
      required_error: 'email is required'
    }).email('please provide valid email'),
    password: string({
      required_error: 'password is required'
    })
  })
});

export default createSessionSchema;