import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  position: relative;
  font-family: "mainfont";
  font-size: 70px;
  font-weight: 500;
  z-index: 50;
`;

export const TopArea = styled.div`
  margin-top: 30px;
`;

export const PhotoWrapper = styled.div`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;

  width: 50%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NamesContainer = styled.div`
  margin-top: 50px;
  padding-left: 20px;
`;

export const Name = styled.div`
  font-family: "Palatino Linotype";
  font-size: 40px;
  line-height: 40px;
`;

export const NameAmpersand = styled.div`
  padding-left: 20px;
  font-family: mainfont;
  font-size: 35px;
`;

export const InviteTextContainer = styled.div`
  font-family: mainfont;
  font-size: 28px;
  text-align: center;
  margin-top: 50px;
`;

export const InviteeContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  display: flex;
  justify-content: center;
  gap: 10%;
`;

export const Invitee = styled.div`
  font-family: "Palatino Linotype";
  font-size: 35px;
  font-weight: 200;

  span {
    margin: 0 15px;
  }
`;

export const InviteDescriptionContainer = styled.div`
  font-family: mainfont;
  font-size: 28px;
  text-align: center;
  margin-top: 30px;
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 10px;
`;

export const DatesMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  margin-top: 16px;

  .day {
    font-size: 24px;
  }

  .year {
    padding-top: 1px;
    font-size: 12px;
  }
`;

export const Topline = styled.hr`
  border: none;
  border-top: 1px solid ${colors.main};
  margin: 8px 0;
`;

export const DayMonth = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;
`;

export const DayItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 20px;

  > div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  span {
    width: 1px;
    background-color: ${colors.main};
    height: 26px;
    margin-left: auto;
    margin-right: 5px;
  }
`;

export const MonthItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 20px;

  > div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  span {
    width: 1px;
    background-color: ${colors.main};
    height: 26px;
    margin-right: auto;
    margin-left: 5px;
  }
`;

export const Summary = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 0 20px;
  font-family: "Palatino Linotype";
  font-size: 12px;
  text-transform: uppercase;
`;

export const Numbers = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 15px;
`;

export const ArrowDown = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  .scroll-down {
    font-size: 1rem;
    color: #333;
    text-decoration: none;
    animation: bounce 2s infinite;
    display: inline-block;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translate(0%0);
    }
    40% {
      transform: translate(0%, -10px);
    }
    60% {
      transform: translate(0%, -5px);
    }
  }
`;
