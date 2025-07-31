import { signIn } from '../actions/auth'
import styles from './sign-in-form.module.css'

export const SignInForm = () => {
  return (
    <form action={signIn} className={styles.form}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type={'password'} />
      <button type="submit">Sign In</button>
    </form>
  )
}
