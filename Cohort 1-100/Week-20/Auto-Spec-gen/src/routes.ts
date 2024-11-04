import { createRoute} from "@hono/zod-openapi";
import { ParamsSchema } from "./input";
import { UserSchema } from "./output";

export const getUserRoute = createRoute({
    method: 'get',
    path: '/user/{id}',
    request: {
      params: ParamsSchema
    },
    responses: {
      200: {
        content: {
          'application/json': {
            schema: UserSchema
          }
        },
        description: "Get the User Details"
      }
    }
  })

  export const postUserRoute = createRoute({
    method: 'post',
    path: '/user/{id}',
    request: {
      params: ParamsSchema
    },
    responses: {
      200: {
        content: {
          'application/json': {
            schema: UserSchema
          }
        },
        description: "Get the User Details"
      }
    }
  })