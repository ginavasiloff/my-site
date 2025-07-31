'use server'
import { getUserByUsername } from '@/data/mysite-db/user'

import { comparePassword } from '@/app/lib/password'
import { createSession, deleteSession } from '../lib/session'
import { redirect } from 'next/navigation'

export const signIn = async (formData: FormData) => {
  try {
    const username = formData.get('username')?.valueOf()
    const password = formData.get('password')?.valueOf()
    if (!username) throw new Error('username is required')
    if (!password) throw new Error('password is required')
    const savedUser = await getUserByUsername(username as string)
    if (!savedUser) throw new Error('invalid credentials')
    const isRight = await comparePassword(
      savedUser.password,
      password as string
    )
    if (!isRight) throw new Error('invalid credentials')
    await createSession(savedUser.id)
  } catch (e) {
    console.log({ e })
  }
  redirect('/')
}

export async function signOut() {
  await deleteSession()
  redirect('/sign-in')
}
