import React, { useState } from "react";
import "./index.css";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  const [friends, setFriends] = useState(initialFriends);

  const toggleForm = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  const handleSelection = (friend) => {
    // setSelectFriend(friend);
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
  };

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friends, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectFriend={selectFriend}
          onSelectButton={handleSelection}
          friendList={friends}
          setFriendList={setFriends}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button className="button" onClick={toggleForm}>
          {!showAddFriend ? "Add Friend" : "Cancel"}
        </Button>
      </div>
      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
function FriendsList({
  selectFriend,
  onSelectButton,
  friendList,
  setFriendList,
}) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectButton={onSelectButton}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectButton, selectFriend, setSelectFriend }) {
  const isSelected = selectFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} even</p>}

      <Button onClick={() => onSelectButton(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const handleAddFriend = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👯 Your friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <Button>Add Friend</Button>
    </form>
  );
}

function FormSplitBill({ selectFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSumbit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSumbit}>
      <h2>Split a bill with {selectFriend.name} </h2>

      <label>💰 Bill Value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>💸 Your Expense </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>

      <label>👯‍♂️ {selectFriend.name}'s Expense </label>
      <input type="text" value={paidByFriend} disabled></input>

      <label>🤑 Who is going to pay bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default App;
