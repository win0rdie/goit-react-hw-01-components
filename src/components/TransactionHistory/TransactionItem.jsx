import PropTypes from 'prop-types';
import { Td } from './TransactionHistory.styled';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <Td>{type}</Td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
