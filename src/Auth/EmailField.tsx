import { ErrorMessage, Field } from "formik"

export default function EmailField() {
  const errorEmail = (msg: string) => {
    return <div className="error error-email">{msg}</div>
  }

  return (
    <>
      <ErrorMessage name="email" render={errorEmail} />
      <Field
        name="email"
        className="input input-authentication"
        type="text"
        placeholder="Email"
      />
    </>
  )
}
