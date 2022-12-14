import styled from '@emotion/styled';

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-inline-start: 0px;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled.li`
  list-style: none;
  /* width: calc(100% / 5); */
  flex-basis: 20%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2``;
