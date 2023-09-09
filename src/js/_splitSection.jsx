import { useState } from "react";
import "../assets/css/SplitSection.css";

export function SplitSection({
  friendDetails,
  setFriends,
  toggleSplitSection,
}) {
  const [totalBill, setTotalBill] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendsBill = Number(totalBill) - Number(myBill);
  const [whoPaid, setWhoPaid] = useState(0);

  function HandleSubmit(e, id) {
    e.preventDefault();

    //if we didnt set any values do not do anything
    if (!whoPaid || !totalBill || !myBill) return;
    if (Number(whoPaid) === 1) {
      setFriends((c) =>
        c.map((c) =>
          c.id === id ? { ...c, status: `You owe me ${friendsBill}` } : c
        )
      );
    } else if (Number(whoPaid) === 2) {
      setFriends((c) =>
        c.map((c) =>
          c.id === id ? { ...c, status: `I owe you ${myBill}` } : c
        )
      );
    }

    toggleSplitSection(false);
  }
  return (
    <form
      className="split-with-friend"
      onSubmit={(e) => HandleSubmit(e, friendDetails.id)}
    >
      <h2>Split A Bill With {friendDetails.friendName}</h2>
      <div className="input-group">
        <label htmlFor="total">Bill</label>
        <input
          id="total"
          type="text"
          onChange={(e) => setTotalBill(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="myBill">Your Bill</label>
        <input
          id="myBill"
          type="text"
          onChange={(e) => setMyBill(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="myFriend">{friendDetails.friendName}&apos;s Bill</label>
        <p id="myFriend">{friendsBill}</p>
      </div>

      <div className="input-group">
        <label htmlFor="paid">Who Paid?</label>
        <select
          id="paid"
          value={whoPaid}
          onChange={(e) => setWhoPaid(e.target.value)}
        >
          <option value={0} disabled selected>
            --Please Select An Option--
          </option>
          <option value={1}>Me</option>
          <option value={2}>{friendDetails.friendName}</option>
        </select>
      </div>

      <button>Split</button>
    </form>
  );
}
