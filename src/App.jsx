import './App.css'
import Profile from './Profile/Profile'
// import FriendList from './FriendList/FriendList'
// import TransactionHistory from './TransactionHistory/TransactionHistory'
import userData from './assets/userData.json'



const App = () => {
  return (
    <div>
    <Profile user ={userData}/>
    {/* <FriendList/>
    <TransactionHistory/> */}
    </div>
  )
}

export default App