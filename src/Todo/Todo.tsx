import React, { useEffect, useState } from "react"
import TodoList from "./TodoList/TodoList"
import { ErrorMessage, Field, Formik, FormikConfig, Form } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import * as List from "../firebase/api.ts"
import { schema } from "./validation-schema.ts"
import { ITodoItem } from "../types/todo-item.ts"
import "./TodoList/TodoList.css"

export default function Todo() {
  const [filter, setFilter] = useState<boolean | undefined>(undefined)
  const [list, setList] = useState<ITodoItem[]>([])

  useEffect(() => {
    const unsubscribe = List.onUpdate(filter, (data) => {
      setList(data)
    })

    return () => unsubscribe()
  }, [filter])

  const addItem: FormikConfig<{ value: string }>["onSubmit"] = async (
    { value },
    { setFieldValue }
  ) => {
    try {
      await List.create(value)
      await setFieldValue("value", "", false)
    } catch (error) {}
  }

  const clearAll = async () => {
    try {
      const ids = list.map((item) => item.id)
      await List.clear(ids)
    } catch (error) {}
  }

  const renderError = (msg: string) => {
    return <div className="error error-list">{msg}</div>
  }

  return (
    <React.Fragment>
      <div className="header">todos</div>
      <div className="box">
        <Formik
          initialValues={{ value: "" }}
          validationSchema={schema}
          onSubmit={addItem}
        >
          <Form className="box-header">
            <ErrorMessage name="value" render={renderError} />
            <Field
              name="value"
              className="input input-list"
              type="text"
              placeholder="Add to do..."
            />
            <button className="icon add" type="submit" title="Add">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button
              className="icon clean"
              type="button"
              title="Clean"
              onClick={clearAll}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </Form>
        </Formik>
        <TodoList list={list} />
        <div className="box-footer">
          <div
            className={"condition" + (filter === undefined ? " active" : "")}
            onClick={() => setFilter(undefined)}
          >
            all
          </div>
          <div
            className={"condition" + (filter === true ? " active" : "")}
            onClick={() => setFilter(true)}
          >
            made
          </div>
          <div
            className={"condition" + (filter === false ? " active" : "")}
            onClick={() => setFilter(false)}
          >
            to do
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
