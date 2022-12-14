import Statistics from './Statistics';
import PropTypes from 'prop-types';

import { StatList, Item } from './Statistics.styled';

const StatisticsList = ({ title, stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <Statistics label={label} percentage={percentage} />
        </Item>
      ))}
    </StatList>
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
