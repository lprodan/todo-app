import { Form, Formik } from "formik"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/config.ts"
import { useLocation, useNavigate } from "react-router-dom"
import EmailField from "./EmailField.tsx"
import { SignupSchema } from "./SignupSchema.ts"

export default function ResetPassword() {
  const location = useLocation()
  const email = location.state
  const navigation = useNavigate()

  const changePassword = () => {
    sendPasswordResetEmail(auth, email)
    alert(
      "Instructions for changing your password have been sent to you by mail"
    )
    navigation("/auth/login")
  }

  return (
    <div className="auth-container">
      <Formik
        initialValues={{ email: email ?? "" }}
        validationSchema={SignupSchema}
        onSubmit={changePassword}
      >
        <Form className="submit">
          <EmailField />
          <button className="btn btn-submit" type="submit" title="Reset">
            Reset Password
          </button>
        </Form>
      </Formik>
    </div>
  )
}
