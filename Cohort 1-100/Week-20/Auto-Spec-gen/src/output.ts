import {z} from '@hono/zod-openapi'
export const UserSchema = z.object({
    name: z.string().min(3).max(10).openapi({
      example:"John"
    }),
    age: z.number().int().openapi({
      example:12
    }),
    id: z.string().openapi({
      example:"8ead4081-4b56-4392-9c57-873ebb07e41b"
    })
  })