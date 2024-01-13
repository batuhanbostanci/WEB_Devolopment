import React from "react";
import "./index.css";

function PackingList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </span>
    </li>
  );
}

export default PackingList;
