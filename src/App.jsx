import './App.css'
import Profile from './components/Profile/Profile'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import userData from './assets/userData.json'
import FriendListItem from './components/FriendListItem/FriendListItem'
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