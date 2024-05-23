import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import usersTable from './lib/db/schema/users'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const db = drizzle(c.env.DB)
  const data = await db.select().from(usersTable)

  return c.json(data)
})

export default app
