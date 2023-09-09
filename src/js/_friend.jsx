import "../assets/css/friends.css";

export function Friend({ friendName, status, id, action }) {
  return (
    <div className="friend">
      <div className="inner">
        <p>{friendName}</p>
        <p>{status}</p>
        <button onClick={() => action(friendName, id)}>Split</button>
      </div>
    </div>
  );
}
