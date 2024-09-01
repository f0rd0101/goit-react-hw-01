import './App.css'
import Profile from './Profile/Profile'
// import FriendList from './FriendList/FriendList'
// import TransactionHistory from './TransactionHistory/TransactionHistory'
import userData from './assets/userData.json'
import FriendList from './FriendList/FriendList'
import friends from './assets/friends.json'



const App = () => {
  return (
    <div>
    <Profile user ={userData}/>
     <FriendList friends={friends}/>
    {/* <TransactionHistory/>  */}
    </div>
  )
}

export default App