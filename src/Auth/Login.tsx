import { Form, Formik, FormikHelpers } from "formik"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config.ts"
import { Link } from "react-router-dom"
import EmailField from "./EmailField.tsx"
import { PasswordField } from "./PasswordField.tsx"
import { AlternativeAuth } from "./AlternativeAuth.tsx"
import { SignupSchema } from "./SignupSchema.ts"

export default function Login() {
  const loginUser = (
    { email, password }: { email: string; password: string },
    { setErrors }: FormikHelpers<{ email: string; password: string }>
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        switch (errorCode) {
          case "auth/invalid-credential":
            setErrors({
              email: "Your login or password is incorrect",
            })
            break
          case "auth/too-many-requests":
            setErrors({
              email: "Too many attempts, please try again later",
            })
        }
      })
  }

  return (
    <div className="auth-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={loginUser}
      >
        {({ values }) => {
          return (
            <Form className="submit">
              <EmailField />
              <PasswordField />
              <div className="btn-container">
                <Link
                  to="/auth/reset-password"
                  className="btn btn-auth btn-forgot-pass"
                  title="ForgotPassword"
                  state={values.email}
                >
                  Forgot your password?
                </Link>
                <button className="btn btn-submit" type="submit" title="Submit">
                  Log In
                </button>
                <p>or</p>
                <AlternativeAuth />
                <div className="auth-container-footer">
                  <span>Not registered yet?</span>
                  <Link
                    to="/auth/signup"
                    className="btn btn-auth btn-login"
                    title="Sign Up"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
