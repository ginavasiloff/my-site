import { neon } from '@neondatabase/serverless'
import { open, readdir } from 'fs/promises'

export async function initialize() {
  if (!process.env.DATABASE_URL) throw new Error('missing environment variable')
  const sql = neon(process.env.DATABASE_URL)
  const files = await readdir('./src/data/mysite-db/sql')
  files.map(async (f) => {
    const rs = await open(`./src/data/mysite-db/sql/${f}`)
    let query = ''
    for await (const line of rs.readLines()) {
      query = query + line
    }
    await sql.query(query)
  })
}
