import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../firebase.ts";
import {useLocation} from "react-router-dom";

export default function ResetPassword() {
    const location = useLocation()
    const email = location.state
    const changePassword = () => {
      sendPasswordResetEmail(auth, email)
    }
    const errorPassword = (msg: string) => {
        return <div className="error-submit error-password">{msg}</div>
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('* Invalid email').required('* Required')
    })

    return <div>
        <Formik initialValues={{email: email ?? ""}}
                validationSchema={SignupSchema}
                onSubmit={changePassword}>
            <Form>
                <ErrorMessage name="email" render={errorPassword}/>
                <Field name="email" className="input" type="text"/>
                <button className="btn-submit" type="submit" title="Submit">
                    Reset Password
                </button>
            </Form>
        </Formik>
    </div>
}