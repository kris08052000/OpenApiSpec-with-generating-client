import {z} from "@hono/zod-openapi"

//inputs
export const ParamsSchema = z.object({
    id : z.string().min(3).openapi({
      param:{
        name:'id',
        in:"path",
      },
      example: '121212'
    })
  })