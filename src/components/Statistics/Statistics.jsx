import PropTypes from 'prop-types';
import { Wrap, Label, Percentage } from './Statistics.styled';

const Statistics = ({ label, percentage }) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Wrap>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
