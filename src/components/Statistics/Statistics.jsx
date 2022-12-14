import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <div className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
