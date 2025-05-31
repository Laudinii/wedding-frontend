import { Card, ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as S from "../sharedStyles";

interface Props {
  sleep: boolean;
  onSetSleep: (sleeps: boolean) => void;
}
export default function Sleep({ sleep, onSetSleep }: Props) {
  const handleChange = (_e: any, value: boolean) => {
    onSetSleep(value);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "10px" }}>
      <S.Section id="sleep">
        <S.Question>
          Czy skorzystacie z noclegu? (Nocleg, śniadanie, poprawiny)
        </S.Question>
        <S.Answer>
          <ToggleButtonGroup
            fullWidth
            value={sleep}
            exclusive
            onChange={handleChange}
            size="medium"
          >
            <ToggleButton
              color="success"
              value={true}
              sx={{ fontSize: 12, fontWeight: "bold" }}
            >
              Tak
            </ToggleButton>
            <ToggleButton
              color="warning"
              value={false}
              sx={{ fontSize: 12, fontWeight: "bold" }}
            >
              Nie
            </ToggleButton>
          </ToggleButtonGroup>
        </S.Answer>
      </S.Section>
    </Card>
  );
}
