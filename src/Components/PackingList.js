import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  handleToogle,
  deleteAllItems,
}) {
  const [orderBy, setOrderBy] = useState("input");
  let sortTedArray;
  if (orderBy === "input") sortTedArray = items;
  if (orderBy === "description")
    sortTedArray = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (orderBy === "packed")
    sortTedArray = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortTedArray.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            handleToogle={handleToogle}
          />
        ))}
      </ul>
      <div className="action-bar">
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="input">Sort By input</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={() => deleteAllItems()}>Clear List</button>
      </div>
    </div>
  );
}
