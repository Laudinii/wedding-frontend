import { Card, Checkbox, FormControlLabel } from "@mui/material";
import * as S from "../sharedStyles";
import { AttendsForm } from "../../types";

interface Props {
  attendence: AttendsForm;
  onSetAttendence: (state: { who: string; attends: boolean }) => void;
}
export default function Attendence({ attendence, onSetAttendence }: Props) {
  const handleChange = (who: string) => (_e: any, isChecked: boolean) => {
    onSetAttendence({ who, attends: isChecked });
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "10px" }}>
      <S.Section id="attendence">
        <S.Question>Czy będziecie z nami w tym dniu?</S.Question>
        <S.Answer>
          {Object.entries(attendence).map(([key, value]) => (
            <FormControlLabel
              control={
                <Checkbox
                  color="default"
                  checked={value.attends}
                  size="medium"
                  onChange={handleChange(key)}
                />
              }
              label={value.label}
            />
          ))}
        </S.Answer>
      </S.Section>
    </Card>
  );
}
