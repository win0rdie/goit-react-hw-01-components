import styled from '@emotion/styled';

export const SectionCss = styled.section`
  background-color: white;
  box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    1px 4px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
  border-radius: 5px;
`;

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
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  // border: 1px solid #797b98;
  width: 60px;
`;

export const Title = styled.h2`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: auto;
  background-color: #fff;
  color: #797b98;
`;

export const Wrap = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const Label = styled.span`
  color: black;
  border-color: 1px solid red;
  padding-bottom: 15px;
`;

export const Percentage = styled.span`
  color: #ffffff;
`;
