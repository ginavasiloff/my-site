import { hashPassword } from '@/app/lib/password'
import { SignInForm } from './sign-in-form'

export default async function Page() {
  return (
    <section>
      <SignInForm />
    </section>
  )
}
