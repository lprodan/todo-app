import {faCheck, faPenToSquare, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import {ObjectSchema} from "yup";
import {ListItem} from "../ListComponent/ListComponent.tsx";

interface Props extends ListItem {
    onEdited?: (value: string) => void
    onCheck?: () => void
    onRemove?: () => void
    validationSchema: ObjectSchema<any>
}

interface ValueObj {
    value: string
}

export default function ListItemComponent(props: Props) {
    const [isEditing, setEditMode] = useState(false)

    const enterEditMode = () => setEditMode(true)

    const leaveEditMode = () => setEditMode(false)

    const onSubmit = ({value}: ValueObj) => {
        props.onEdited?.(value)
        leaveEditMode()
    }

    const renderErr = (msg: string) => {
        return <div className="error edit-mode">{msg}</div>
    }

    return <Formik initialValues={{value: props.value}}
                   validationSchema={props.validationSchema}
                   onSubmit={onSubmit}
    >
        <Form className="list">
            <ErrorMessage name="value" render={renderErr}/>
            <div className="date">{props.date}</div>
            <Field className="checkmark" type="checkbox" name="checkbox" onChange={() => props.onCheck?.()}
                   checked={props.checked}/>
            <div className={props.checked && !isEditing ? "list-item checked" : "list-item"}>
                {isEditing ? <Field name="value" className="input" type="text"/> : <span>{props.value}</span>}
            </div>
            {!isEditing && <button className="icon edit" title="Edit" type="button" onClick={enterEditMode}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </button>}
            {isEditing && <button className="icon edit" title="Save" type="submit">
                <FontAwesomeIcon icon={faCheck}/>
            </button>}
            <button className="icon remove" title={isEditing ? "exit" : "delete"} type={isEditing ? "button" : "reset"}
                    onClick={() => isEditing ? leaveEditMode() : props.onRemove?.()}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        </Form>
    </Formik>
}