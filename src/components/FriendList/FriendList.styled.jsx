import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;

  width: 480px;

  background: #ffffff;
  box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    1px 4px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
  padding: 10px;
`;

export const FriendListCss = styled.ul`
  padding-inline-start: 0px;
  list-style-type: none;
`;

export const Avatar = styled.img`
  display: flex;
  width: 80px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  margin-right: 30px;
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
`;

export const Item = styled.li`
  margin: 10px;
`;

export const Status = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  margin-right: 25px;
  margin-left: 10px;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }}};
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #42436e;
`;
