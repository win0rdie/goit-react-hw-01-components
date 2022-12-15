import styled from '@emotion/styled';

export const TransactionHistoryCss = styled.table`
  //   padding: 10px;
  width: 500px;
  background: #ffffff;
  //   border: 2px solid grey;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2), 2px 1px 1px rgba(0, 0, 0, 0.14),
    2px 4px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
`;

export const Thead = styled.thead`
  font-size: 18px;
  height: 40px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #57c1db;
`;

export const Tbody = styled.tbody`
  text-align: center;
  height: 35px;
  font-weight: 350;
  background-color: #d3d3d3;
  &:nth-of-type(2n) {
    background: #a9a9a9;
  }
`;

export const Td = styled.td`
  &:first-letter {
    text-transform: uppercase;
  }
`;
