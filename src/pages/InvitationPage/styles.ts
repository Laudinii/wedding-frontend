import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  color: ${colors.main};
  position: relative;

  display: flex;
  flex-direction: column;
  background-image: url("/mainbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  width: 100%;
  min-height: 100vh;

  padding: 20px;

  box-sizing: border-box;
`;
