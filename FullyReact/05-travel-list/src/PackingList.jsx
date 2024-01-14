import React, { useState } from "react";
import "./index.css";

function PackingList({ items, onClearList, onDeleteItems, onToogleItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  else if (sortBy === "packed")
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onToogleItems={onToogleItems}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItems, onToogleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToogleItems(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </span>
    </li>
  );
}

export default PackingList;
