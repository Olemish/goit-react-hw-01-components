import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    console.log(items)
    return (
        <table className={css.transactionHistory}>
            <thead className={css.listHistory} >
                <tr className={css.wrap}>               
                <th className={css.type}>Type</th>
                <th className={css.amount}>Amount</th>
                <th className={css.currency}>Currency</th>
                </tr>
            </thead>
<tbody className={css.info}>
{items.map(({ id, type, amount, currency }) => (
 <div key={id}>
                <tr className={css.wrap}>
                    <th className={css.type}>{type}</th>
                    <th className={css.amount}>{amount}</th>
                    <th className={css.currency}>{currency}</th>      
                </tr>
</div>
    ))}
    </tbody>
        </table>
        )
 }