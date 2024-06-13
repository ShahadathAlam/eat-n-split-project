import { useState } from "react";

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

export default function App() {
  const [isOpen, setIsOpen] = useState(null);
  const [addFriend, setAddFriend] = useState(null);
  function handleClick() {
    setIsOpen(isOpen ? null : true);
  }
  function handleAddfriend() {
    setAddFriend(addFriend ? null : true);
  }
  return (
    <div className="app">
      <FriendsList
        onClick={handleClick}
        addFriend={addFriend}
        onAddFriend={handleAddfriend}
      />

      <SplitBill isOpen={isOpen} />
    </div>
  );
}
function FriendsList({ onClick, addFriend, onAddFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend
            name={friend.name}
            image={friend.image}
            key={friend.id}
            onClick={onClick}
          />
        ))}
      </ul>
      <div>
        <button className="button" onClick={onAddFriend}>
          Add friend
        </button>
        <div>{addFriend && <AddFriend />}</div>
      </div>
    </div>
  );
}
function Friend({ name, image, onClick }) {
  return (
    <li>
      <img src={image} alt={image} />
      <h3>{name}</h3>
      <p>You owe Clark 7$</p>
      <button className="button" onClick={onClick}>
        Select
      </button>
    </li>
  );
}

function AddFriend({ addFriend }) {
  return (
    <div>
      <form className="form-add-friend">
        <label>👧Friend name</label>
        <input type="text" />
        <label>🌄Image URL</label>
        <input type="text" />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
function SplitBill({ isOpen }) {
  return (
    <div>
      {isOpen && (
        <form className="form-split-bill">
          <h2>Split a bill with sarah</h2>
          <label>💰Bill value</label>
          <input type="text" />
          <label>👧Your expense</label>
          <input type="text" />
          <label>👩Sarh's expense</label>
          <input type="text" />
          <label>🤣Who is paying the bill?</label>
          <select>
            <option>You</option>
          </select>
          <button className="button">Split bill</button>
        </form>
      )}
    </div>
  );
}
