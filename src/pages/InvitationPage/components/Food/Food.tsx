import { Button, Card, TextareaAutosize, TextField } from "@mui/material";
import * as S from "../sharedStyles";
import React, { ChangeEventHandler } from "react";

interface Props {
  food: string;
  onSetFood: (food: string) => void;
}
export default function Food({ food, onSetFood }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetFood(e.target.value);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "10px" }}>
      <S.Section id="sleep">
        <S.Question>
          Czy macie jakieś preferencje żywieniowe (vege itp.)? Kogo dotyczy?
        </S.Question>
        <S.Answer>
          <TextField
            style={{ fontSize: 50 }}
            placeholder="Np. Nie jems minsa.."
            value={food}
            minRows={4}
            multiline
            onChange={handleChange}
            slotProps={{
              input: { sx: { fontSize: "14px" } },
              inputLabel: { sx: { fontSize: "14px" } },
            }}
          />
        </S.Answer>
      </S.Section>
    </Card>
  );
}
