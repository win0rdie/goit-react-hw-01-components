import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

import {
  TransactionHistoryCss,
  Thead,
  Tbody,
} from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryCss>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      {transactions.map(transaction => (
        <Tbody key={transaction.id}>
          <TransactionItem
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </Tbody>
      ))}
    </TransactionHistoryCss>
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
