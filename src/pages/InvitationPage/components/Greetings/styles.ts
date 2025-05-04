import styled from "styled-components";

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

export const PhotoWrapper = styled.div`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;

  width: 60%;
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
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
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
  font-size: 25px;
  font-weight: 200;

  text-decoration: underline;
`;

export const InviteDescriptionContainer = styled.div`
  font-family: mainfont;
  font-size: 25px;
  text-align: center;
  margin-top: 10px;
`;

export const DatesContainer = styled.div``;
