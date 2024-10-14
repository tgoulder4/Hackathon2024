import { Hono } from 'hono'
import { handle } from 'hono/vercel'
const app = new Hono().basePath('/api')
// .route('/wmCheck', someRoute)

export const GET = handle(app)
export const POST = handle(app)
export type AppType = typeof app;