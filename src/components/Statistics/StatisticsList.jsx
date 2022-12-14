import Statistics from './Statistics';
import PropTypes from 'prop-types';

const StatisticsList = ({ title, stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <Statistics label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
