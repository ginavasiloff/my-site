import { query } from '@/data/query'
import { neon } from '@neondatabase/serverless'

type User = {
  id: string
  username: string
  password: string
}

export const addUser = async (user: User) => {
  const queryString = `insert into user(email, password) values('${user.username}', '${user.password});`
  const res = await query(queryString)
  return res
}

export const getUserById = async (id: string): Promise<User> => {
  const queryString = `select * from users where id='${id}'`
  const res = await query(queryString)
  if (res.length < 1) throw new Error('User not found')
  return res[0] as User
}

export const getUserByUsername = async (username: string): Promise<User> => {
  const queryString = `select * from users where username='${username}'`
  const res = await query(queryString)
  if (res.length < 1) throw new Error('User not found')
  return res[0] as User
}
