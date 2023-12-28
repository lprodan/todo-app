import "./Pagination.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAnglesRight,
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"

interface Props {
  itemsPerPage: number
  totalItems: number
  paginate: (value: number) => void
  currentPage: number
}

export function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: Props) {
  const pageNumbers = []
  const lastPage = Math.ceil(totalItems / itemsPerPage)

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        <li onClick={() => paginate(1)} className="btn page-item">
          <FontAwesomeIcon icon={faAnglesLeft} />
        </li>
        <li onClick={() => paginate(currentPage - 1)} className="btn page-item">
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`btn page-item ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li onClick={() => paginate(currentPage + 1)} className="btn page-item">
          <FontAwesomeIcon icon={faAngleRight} />
        </li>
        <li onClick={() => paginate(lastPage)} className="btn page-item">
          <FontAwesomeIcon icon={faAnglesRight} />
        </li>
      </ul>
    </nav>
  )
}
