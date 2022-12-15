import PropTypes from 'prop-types';
import { Container, Avatar, Status, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Container>
      <Status isOnline={isOnline}></Status>
      <Avatar img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Container>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
