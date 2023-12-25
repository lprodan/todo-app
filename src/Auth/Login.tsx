import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Auth.css";
import {
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/config.ts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const loginUser = (
    { email, password }: { email: string; password: string },
    { setErrors }: FormikHelpers<{ email: string; password: string }>
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-credential":
            setErrors({ email: "Your login or password is incorrect" });
            break;
          case "auth/too-many-requests":
            setErrors({ email: "Too many attempts, please try again later" });
        }
      });
  };

  const authGoogle = () => {
    return signInWithRedirect(auth, googleAuthProvider);
  };

  const authAnonym = () => {
    signInAnonymously(auth).catch((error) => {
      console.log(error.message);
    });
  };

  const changeVisibility = () => setPasswordVisibility(!passwordVisibility);

  const errorEmail = (msg: string) => {
    return <div className="error error-email">{msg}</div>;
  };
  const errorPassword = (msg: string) => {
    return <div className="error error-password">{msg}</div>;
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "* Too Short!")
      .max(50, "* Too Long!")
      .required("* Required"),
    email: Yup.string().email("* Invalid email").required("* Required"),
  });

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
              <ErrorMessage name="email" render={errorEmail} />
              <Field
                name="email"
                className="input input-authentication"
                type="text"
                placeholder="Email"
              />
              <ErrorMessage name="password" render={errorPassword} />
              <div className="box-pass">
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
                <div className="other-auth">
                  <button
                    type="button"
                    className="btn btn-other-auth"
                    title="Sign in with Google"
                    onClick={authGoogle}
                  >
                    <img
                      src="/public/icon-google.png"
                      alt="google-icon"
                      className="icon-google"
                    />
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    className="btn btn-other-auth"
                    title="Sign in with Google"
                    onClick={authAnonym}
                  >
                    <img
                      src="/public/icon-anonymous.png"
                      alt="google-icon"
                      className="icon-google"
                    />
                    Anonymous sign in
                  </button>
                </div>
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
          );
        }}
      </Formik>
    </div>
  );
}
