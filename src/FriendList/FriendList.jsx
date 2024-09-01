import s from '../FriendList/FriendList.module.css'
import clsx from 'clsx'



const FriendList = ({friends}) => {

  return (
    <ul className={s.ulfriend}>
       {friends.map((friend)=>{
        return(
          <li key ={friend.id} className={s.lifriend}>
            <img src={friend.avatar} alt="avatar" width='48' />
            <p>{friend.name}</p>
            {friend.isOnline ? <p className={clsx(s.online,s.green)}>Online</p> : <p className={clsx(s.online,s.red)}>Offline</p>}
          </li>
        )
       })}
    </ul>
  )
}

export default FriendList