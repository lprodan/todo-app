import { ChangeEvent } from "react";
import "./ItemsPerPage.css";

interface Props {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export function ItemsPerPage({ itemsPerPage, setItemsPerPage }: Props) {
  const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const options = () => {
    const arr = [];
    for (let i = 5; i <= 10; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  return (
    <div className="count-items">
      <label htmlFor="itemsPerPage">Show tasks on the page:</label>
      <select
        name="itemsPerPage"
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        {options()}
      </select>
    </div>
  );
}
