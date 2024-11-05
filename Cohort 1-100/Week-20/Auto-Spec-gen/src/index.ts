import { OpenAPIHono } from "@hono/zod-openapi";
import { getUserRoute, postUserRoute } from "./routes";
import { Hono } from 'hono'
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono()

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid('param');
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.openapi(postUserRoute, (c) => {
  const { id } = c.req.valid('param');
  return c.json({
    id,
    age: 69,
    name: 'Ultra-B'
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API'
  }
})

app.get('/ui', swaggerUI({url:'/doc'}))

export default app