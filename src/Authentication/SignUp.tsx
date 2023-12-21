import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Authentication.css"
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../firebase.ts";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
    const register = ({ email, password }: any, { setErrors }: FormikHelpers<any>) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code

                switch (errorCode) {
                    case "auth/email-already-in-use":
                        setErrors({ email: 'You are already registered' })
                        break
                }
            });
    }

    const goToLogIn = () => {
        navigate("/auth/login")
    }


    const errorEmail = (msg: string) => {
        return <div className="error-submit error-email">{msg}</div>
    }
    const errorPassword = (msg: string) => {
        return <div className="error-submit error-password">{msg}</div>
    }

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, '* Too Short!')
            .max(50, '* Too Long!')
            .required('* Required'),
        email: Yup.string().email('* Invalid email').required('* Required')
    })

    return <div className="auth-container">
        <Formik initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={register}>
            <Form className="submit">
                <ErrorMessage name="email" render={errorEmail} />
                <Field name="email" className="input input-authentication" type="text"
                    placeholder="Email" />
                <ErrorMessage name="password" render={errorPassword} />
                <Field name="password" className="input input-authentication" type="text"
                    placeholder="Password" />
                <div className="btn-container">
                    <button className="btn btn-submit" type="submit" title="Submit">
                        Sign Up
                    </button>
                    <span>Are you already registered?</span>
                    <button className="btn btn-login" type="button" title="Login" onClick={goToLogIn}>Log In</button>
                </div>
            </Form>
        </Formik>
    </div>
}