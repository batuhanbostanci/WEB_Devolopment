import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list ?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onDeleteItems={handleDeleteItem}
        onToogleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
