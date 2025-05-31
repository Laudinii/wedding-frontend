import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Question = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${colors.main};

  text-align: center;
  font-weight: bold;
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
