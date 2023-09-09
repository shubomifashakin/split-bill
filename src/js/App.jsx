import { useState } from "react";
import "../assets/css/app.css";
import { Friend } from "./_friend";
import { SplitSection } from "./_splitSection";
import { AddNewFriendSection } from "./_addNewFriend";

export default function App() {
  const [friends, setFriends] = useState([]);

  const [addNewFriendOpen, setAddNewFriend] = useState(false);

  function toggleAddNewFriendSection() {
    setAddNewFriend((c) => !c);
  }

  //split section toggler
  const [showSplitSection, setShowSplitSection] = useState(false);

  //name that is passed to the split section
  const [splitFriendDetails, setSplitFriendDetails] = useState("");

  function setSplitSectionDetails(friendName, friendId) {
    //sets the name that would be displayed in the split section
    setSplitFriendDetails({ friendName, id: friendId });

    //toggles the split section, if it is already shown (true) it becomes hidden(false) & vice versa
    setShowSplitSection((c) => (c ? c : !c));
  }

  return (
    <div className="container">
      <div className="left">
        <h2>Share A Bill With Friends</h2>
        <div className="inner-left">
          <div className="friends">
            {friends.map((c, i) => (
              <Friend
                key={i}
                friendName={c.name}
                status={c.status}
                id={c.id}
                action={setSplitSectionDetails}
              />
            ))}
          </div>

          {addNewFriendOpen ? (
            <AddNewFriendSection
              setFriends={setFriends}
              key={1}
              toggleAddNewFriendSection={toggleAddNewFriendSection}
            />
          ) : (
            <button onClick={toggleAddNewFriendSection}>Add New Friend</button>
          )}
        </div>
      </div>

      <div className="right">
        {showSplitSection ? (
          <SplitSection
            friendDetails={splitFriendDetails}
            setFriends={setFriends}
            key={1}
            toggleSplitSection={setShowSplitSection}
          />
        ) : null}
      </div>
    </div>
  );
}
