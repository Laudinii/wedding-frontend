import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100%;
  padding: 20px;

  box-sizing: border-box;
  overflow-x: hidden;

  background: ${colors.main};

  font-weight: bold;
  font-size: 20px;
  color: ${colors.tertiary};

  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
