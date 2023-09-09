import { useState } from "react";
import "../assets/css/addNewFriend.css";

export function AddNewFriendSection({ toggleAddNewFriendSection, setFriends }) {
  const [friendName, setFriendName] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    if (!friendName) return;
    //create the new friend object
    const newFriend = { name: friendName, id: Date.now(), status: "No Debt" };

    //add the friend to the state
    setFriends((c) => [...c, newFriend]);

    //clear the input field
    setFriendName("");

    //close the add new friend section
    toggleAddNewFriendSection();
  }

  function onType(e) {
    if (
      /[a-zA-Z]|-/.test(e.key) &&
      e.key.length === 1 &&
      friendName.length < 11
    ) {
      console.log("hello");
      setFriendName((c) => [...c, e.key].join(""));
    } else if (e.key === "Backspace") {
      setFriendName((c) => c.slice(0, c.length - 1));
    }
  }
  //   function settingFriendsName(e) {
  //     console.log(friendName.length);
  //     if (friendName.length < 11) {
  //       setFriendName(e.target.value);
  //     }
  //   }
  return (
    <form className="add-new-friend" onSubmit={HandleSubmit}>
      <h2>Add A New Friend</h2>
      <div className="input-group">
        <label htmlFor="newfriend">Last Name Of Friend</label>
        <input
          id="newfriend"
          type="text"
          value={friendName}
          onKeyDown={onType}
        />
      </div>

      <div className="buttons">
        <button onClick={HandleSubmit}>Add Friend</button>
        <button onClick={toggleAddNewFriendSection}>Close</button>
      </div>
    </form>
  );
}
