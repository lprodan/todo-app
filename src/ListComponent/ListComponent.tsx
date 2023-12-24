import React, { useEffect } from "react";
import "./ListComponent.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Field, Form, Formik, FormikConfig } from "formik";
import * as Yup from "yup";
import * as List from "../API/api.ts";
import ListItemComponent from "../ListItemComponent/ListItemComponent.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { ItemsPerPage } from "../Pagination/ItemsPerPage.tsx";

export interface ListItem {
  id: string;
  checked: boolean;
  value: string;
  date: string;
}

function ListComponent() {
  const [list, setList] = useState<ListItem[]>([]);
  const [filter, setFilter] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<Error>();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(list.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const addItem: FormikConfig<{ value: string }>["onSubmit"] = async (
    { value },
    { setFieldValue }
  ) => {
    try {
      await List.create(value);
      await setFieldValue("value", "", false);
    } catch (e) {
      setError(e as Error);
    }
  };

  const editItem = async (id: string, value: string) => {
    try {
      await List.update(id, { value });
    } catch (e) {
      setError(e as Error);
    }
  };

  const removeItem = async (id: string) => {
    try {
      await List.remove(id);
    } catch (e) {
      setError(e as Error);
    }
  };

  const clearAll = async () => {
    try {
      const ids = list.map((item) => item.id);
      await List.clear(ids);
    } catch (e) {
      setError(e as Error);
    }
  };

  const checkItem = async (id: string, checked: boolean) => {
    try {
      await List.update(id, { checked });
    } catch (e) {
      setError(e as Error);
    }
  };

  const schema = Yup.object().shape({
    value: Yup.string()
      .min(3, "* Too Short!")
      .max(350, "* Too Long!")
      .required("* Required"),
  });

  useEffect(() => {
    const unsubscribe = List.onUpdate(filter, (data) => {
      setList(data);
      setCurrentPage(1);
    });

    return () => unsubscribe();
  }, [filter]);

  const renderError = (msg: string) => {
    return <div className="error error-list">{msg}</div>;
  };

  if (error) {
    setTimeout(() => {
      setError(undefined);
    }, 2000);
  }

  const currentList = list.slice(indexOfFirstItem, indexOfLastItem);

  const renderList = () => {
    if (error) {
      return (
        <h1 style={{ color: "var(--error-color)" }}>
          {error.message}
          <p>Help me -_-</p>
        </h1>
      );
    } else {
      return currentList.map((item) => (
        <ListItemComponent
          id={item.id}
          key={item.id}
          value={item.value}
          checked={item.checked}
          date={item.date}
          onRemove={() => removeItem(item.id)}
          onCheck={() => checkItem(item.id, !item.checked)}
          onEdited={(value) => editItem(item.id, value)}
          validationSchema={schema}
        />
      ));
    }
  };

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
        {list.length > 0 ? (
          <>
            <ItemsPerPage
              itemsPerPage={itemsPerPage}
              setItemsPerPage={handleItemsPerPageChange}
            />
            <div className="box-section">{renderList()}</div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={list.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        ) : (
          <div className="box-section message">No tasks</div>
        )}
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
  );
}

export default ListComponent;
