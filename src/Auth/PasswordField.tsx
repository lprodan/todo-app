import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ErrorMessage, Field } from "formik"
import { useState } from "react"

export function PasswordField() {
  const [passwordVisibility, setPasswordVisibility] = useState(true)

  const errorPassword = (msg: string) => {
    return <div className="error error-password">{msg}</div>
  }

  const changeVisibility = () => setPasswordVisibility(!passwordVisibility)

  return (
    <div className="box-pass">
      <ErrorMessage name="password" render={errorPassword} />
      <Field
        name="password"
        className="input input-authentication"
        type={passwordVisibility ? "password" : "text"}
        placeholder="Password"
      />
      {!passwordVisibility ? (
        <FontAwesomeIcon
          icon={faEye}
          className="btn btn-eye"
          onClick={changeVisibility}
          title="show password"
        />
      ) : (
        <FontAwesomeIcon
          icon={faEyeSlash}
          className="btn btn-eye"
          onClick={changeVisibility}
          title="hide password"
        />
      )}
    </div>
  )
}
