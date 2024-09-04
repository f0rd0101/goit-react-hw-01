import FriendListItem from '../FriendListItem/FriendListItem.jsx'
import s from '../FriendList/FriendList.module.css'




function FriendList({ friends }) {
  return (
    <ul className={s.ulfriend}>{
      friends.map(friend =>
        <li className={s.lifriend} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      )}
    </ul>
  )
}

export default FriendList