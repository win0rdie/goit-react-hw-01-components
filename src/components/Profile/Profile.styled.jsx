import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 90%;
  background-color: #e7ecf2;
  color: #010101;
`;

export const ProfileCss = styled.div`
  background: #ffffff;
  box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    1px 4px 3px rgba(0, 0, 0, 0.12);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
  width: 500px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 50px;
`;

export const Avatar = styled.img`
  width: 60%;
  display: block;
  background-color: #9b7e6a;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #42436e;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 24px;
  color: #4d4e59;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 24px;
  color: #4d4e99;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 18px;
  padding-inline-start: 0px;
  background-color: #f3f6f9;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const StatsLi = styled.li`
  padding-right: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  // padding-bottom : 10px;
  padding-right: 10px;
`;

export const Quantity = styled.span`
  font-size: 24px;
  color: #4d4e59;
`;
