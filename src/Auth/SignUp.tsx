import { Form, Formik, FormikHelpers } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.ts";
import { useNavigate } from "react-router-dom";
import EmailField from "./EmailField.tsx";
import { PasswordField } from "./PasswordField.tsx";
import { AlternativeAuth } from "./AlternativeAuth.tsx";
import { SignupSchema } from "./SignupSchema.ts";

export default function SignUp() {
  const navigate = useNavigate();
  const register = (
    { email, password }: { email: string; password: string },
    { setErrors }: FormikHelpers<{ email: string; password: string }>
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/email-already-in-use":
            setErrors({ email: "You are already registered" });
            break;
        }
      });
  };

  const goToLogIn = () => {
    navigate("/auth/login");
  };

  return (
    <div className="auth-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={register}
      >
        <Form className="submit">
          <EmailField />
          <PasswordField />
          <div className="btn-container">
            <button className="btn btn-submit" type="submit" title="Submit">
              Sign Up
            </button>
            <p>or</p>
            <AlternativeAuth />
            <div className="auth-container-footer">
              <span>Are you already registered?</span>
              <button
                className="btn btn-auth btn-login"
                type="button"
                title="Login"
                onClick={goToLogIn}
              >
                Log In
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
