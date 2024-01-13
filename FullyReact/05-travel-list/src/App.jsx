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

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
