import {z} from "@hono/zod-openapi"

//Outputs
export const UserSchema = z.object({
    name: z.string().min(1).max(10).openapi({
      example:"John"
    }),
    age: z.number().int().openapi({
      example:13
    }),
    id: z.string().min(1).max(10).openapi({
      example:"24"
    })
  })