import { query } from '@/data/query'
import { neon } from '@neondatabase/serverless'

type User = {
  email: string
  password: string
}

export const addUser = async (user: User) => {
  const queryString = `insert into user(email, password) values('${user.email}', '${user.password});`
  const res = await query(queryString)
  console.log({ res })
}
