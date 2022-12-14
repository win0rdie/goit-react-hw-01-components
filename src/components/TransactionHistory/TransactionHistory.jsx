import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <TransactionItem
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tbody>
      ))}
    </table>
  );
};

TransactionItem.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
