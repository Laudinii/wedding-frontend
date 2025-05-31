import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  color: ${colors.main};
  position: relative;
  background: white;
  box-shadow: 0 8px 16px rgba(107, 101, 101, 0.67);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  // background-image: url("/mainbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  width: 100%;
  max-width: 500px;

  padding: 20px;

  box-sizing: border-box;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;
