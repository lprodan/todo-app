import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import "./LogInPage.css"
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.ts";
import {Link} from "react-router-dom";

export default function Login() {
    const loginUser = ({email, password}: any, {setErrors}: FormikHelpers<any>) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                switch (errorCode) {
                    case "auth/invalid-credential":
                        setErrors({email: 'Your login or password is incorrect'})
                        break
                    case "auth/too-many-requests":
                        setErrors({email: "Too many attempts, please try again later"})
                }
            });
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

    return <div className="submit">
        <Formik initialValues={{email: "", password: ""}}
                validationSchema={SignupSchema}
                onSubmit={loginUser}>
            {({values}) => {
                return <Form style={{width: "auto"}}>
                    <ErrorMessage name="email" render={errorEmail}/>
                    <Field name="email" className="input" type="text"
                           placeholder="Enter email"/>
                    <ErrorMessage name="password" render={errorPassword}/>
                    <Field name="password" className="input" type="text"
                           placeholder="Enter password"/>
                    <div className="btn-container">
                        <Link to="/auth/reset-password" className="btn-forgot-pass" title="ForgotPassword" state={values.email}>Forgot your password?</Link>
                        <button className="btn-submit" type="submit" title="Submit">
                            Log In
                        </button>
                        <span>Not registered yet?</span>
                        <Link to="/auth/signup" className="btn-login">Sign Up</Link>
                    </div>
                </Form>
            }}

        </Formik>
    </div>
}