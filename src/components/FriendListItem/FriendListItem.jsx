import css from "../FriendListItem/FriendListItem.module.css";

function FriendListItem({ friend }) {
  return (
    <div>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
      {friend.isOnline ? (<p className={css.online}>Online</p>) : (<p className={css.offline}>Offline</p>)}
    </div>
  )
}

export default FriendListItem;
