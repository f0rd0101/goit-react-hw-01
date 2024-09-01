import s from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({transaction}) => {
  return (
    <table className={s.table}>
  <thead >
    <tr className={s.headtr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transaction.map((trans)=>{
        return(
            <tr key ={trans.id}>
                <td>{trans.type}</td>
                <td>{trans.amount}</td>
                <td>{trans.currency}</td>
            </tr>
        )
    })}
  </tbody>
</table>

  )
}

export default TransactionHistory