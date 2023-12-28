import React, { useEffect } from "react"
import { useState } from "react"
import * as List from "../../firebase/api.ts"
import TodoItem from "./TodoItem.tsx"
import { Pagination } from "../Pagination/Pagination.tsx"
import { ItemsPerPage } from "../Pagination/ItemsPerPage.tsx"
import { ITodoItem } from "../../types/todo-item.ts"

interface Props {
  list: ITodoItem[]
}

function TodoList({ list }: Props) {
  const [error, setError] = useState<Error>()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(list.length / itemsPerPage)) {
      setCurrentPage(pageNumber)
    }
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
  }

  const editItem = async (id: string, value: string) => {
    try {
      await List.update(id, { value })
    } catch (e) {
      setError(e as Error)
    }
  }

  const removeItem = async (id: string) => {
    try {
      await List.remove(id)
    } catch (e) {
      setError(e as Error)
    }
  }

  const checkItem = async (id: string, checked: boolean) => {
    try {
      await List.update(id, { checked })
    } catch (e) {
      setError(e as Error)
    }
  }

  if (error) {
    setTimeout(() => {
      setError(undefined)
    }, 2000)
  }

  useEffect(() => {
    if (list.length > 0 && indexOfFirstItem > list.length - 1) {
      setCurrentPage(currentPage - 1)
    }
  }, [list.length])

  const currentList = list.slice(indexOfFirstItem, indexOfLastItem)

  const renderList = () => {
    if (error) {
      return (
        <h1 style={{ color: "var(--error-color)" }}>
          {error.message}
          <p>Help me -_-</p>
        </h1>
      )
    } else {
      return currentList.map((item) => (
        <TodoItem
          id={item.id}
          key={item.id}
          value={item.value}
          checked={item.checked}
          date={item.date}
          onRemove={() => removeItem(item.id)}
          onCheck={() => checkItem(item.id, !item.checked)}
          onEdited={(value) => editItem(item.id, value)}
        />
      ))
    }
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default TodoList
