import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import Section from './Section/Section';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../db/user';
import statisticsData from '../db/data';
import friends from '../db/friends';
import transactions from '../db/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <StatisticsList stats={statisticsData} />
        {/* <Statistics stats={statisticsData} /> */}
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
};
