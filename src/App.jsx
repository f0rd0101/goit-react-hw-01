import './App.css'
import Profile from './Profile/Profile'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import userData from './assets/userData.json'
import FriendListItem from './FriendList/FriendListItem'
import friends from './assets/friends.json'
import transaction from './assets/transaction.json'



const App = () => {
  return (
    <div>
    <Profile user ={userData}/>
     <FriendListItem friends={friends}/>
    <TransactionHistory transaction={transaction}/> 
    </div>
  )
}

export default App