import styled from "styled-components";

export const UPWrapper = styled.div`
  display: flex;
`;
export const PEWrapper = styled.div`
  margin: 73px 0 0 40px;

  display: flex;
  flex-direction: column;
  width: 100%;
  hr {
    width: 100%;
    margin: 26px 0 57px;
    border: #efefef 1px solid;
  }
`;

export const PETitleInput = styled.input`
  border: none;
  font-family: "Pretendard-Regular";
  color: #2c2c2c;
  font-size: 36px;
  font-weight: 600;
`;

export const PEContents = styled.div``;

export const PEInputWrapper = styled.div`
  height: 378px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PEContentTitle = styled.div`
  width: 404px;
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 21px;

  svg {
    margin: 0 18px 10px 0;
  }

  h4 {
    font-weight: 400;
    color: #2c2c2c;
    margin: 0 0 7px 0;
  }
`;

export const PEMap = styled.div`
  margin: 0 20px 52px 0;
`;

export const PEMapWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const OpenDetailBtn = styled.button`
  width: 192px;
  height: 33px;
  border-radius: 4px;
  border: none;
  background-color: #ff6827;
  cursor: pointer;

  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #ffffff;
`;

export const ODPWrapper = styled.div`
  width: 828px;
  border: 1px solid #efefef;
`;

export const ODPCityUl = styled.ul`
  margin: 26px 0;
  padding-left: 28px;
`;

export const ODPCityLi = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: relative;
  padding-left: 27px;
  margin-bottom: 45px;
`;

export const OrangeBullet = styled.span`
  position: absolute;
  left: 0;
  top: 2px;
  width: 15px;
  height: 15px;
  background-color: #ff6827;
  border-radius: 50%;
`;

export const ODPDays = styled.div`
  display: flex;
  align-items: center;
  width: 55px;
  height: 25px;
  background-color: #efefef;
  border-radius: 4px;
  margin: 5px 0;
  color: #9b9b9b;
`;

export const ODPDaysInput = styled.input`
  border: none;
  background-color: #efefef;
  width: 25px;
  margin-left: 5px;
  font-size: 14px;
`;

export const ODPDetail = styled.div``;
