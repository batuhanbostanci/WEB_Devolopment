import React from "react";
import "./index.css";

function PackingList({ items, onDeleteItems, onToogleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
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
