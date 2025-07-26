import { neon } from '@neondatabase/serverless'

export const query = (query: string) => {
  if (!process.env.DATABASE_URL) throw new Error('missing environment variable')
  const sql = neon(process.env.DATABASE_URL)
  return sql.query(query)
}
