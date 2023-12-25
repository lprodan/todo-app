import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config.ts";
import { useLocation, useNavigate } from "react-router-dom";
import "./Authentication.css";

export default function ResetPassword() {
  const location = useLocation();
  const email = location.state;
  const navigation = useNavigate();

  const changePassword = () => {
    sendPasswordResetEmail(auth, email);
    alert(
      "Instructions for changing your password have been sent to you by mail"
    );
    navigation("/auth/login");
  };

  const errorEmail = (msg: string) => {
    return <div className="error error-email">{msg}</div>;
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("* Invalid email").required("* Required"),
  });

  return (
    <div className="auth-container">
      <Formik
        initialValues={{ email: email ?? "" }}
        validationSchema={SignupSchema}
        onSubmit={changePassword}
      >
        <Form className="submit">
          <ErrorMessage name="email" render={errorEmail} />
          <Field
            name="Email"
            className="input input-authentication"
            type="text"
            placeholder="Email"
          />
          <button className="btn btn-submit" type="submit" title="Reset">
            Reset Password
          </button>
        </Form>
      </Formik>
    </div>
  );
}
