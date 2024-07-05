import 'server-only'
import { COOKIE_NAME } from './constants'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getUserFromToken } from './authTools'

export const getCurrentUser = async () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')

  return user
}