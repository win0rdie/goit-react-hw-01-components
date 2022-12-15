import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import { FriendListCss, Item } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListCss>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Item>
      ))}
    </FriendListCss>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
