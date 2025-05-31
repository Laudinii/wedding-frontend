import { useParams } from "react-router-dom";
import Attendence from "./components/Attendence";
import Greetings from "./components/Greetings";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getInvitation } from "./api";
import Sleep from "./components/Sleep/Sleep";
import Food from "./components/Food";
import { Button } from "@mui/material";
import { useState } from "react";
import { AttendsChange, AttendsForm } from "./types";

export default function InvitationPage() {
  const { id } = useParams();
  const { isError } = useQuery({
    queryKey: ["get-invitation-details"],
    queryFn: () => getInvitation(id),
    enabled: !!id,
  });

  const [attendence, setAttendece] = useState<AttendsForm>({
    henryka: { label: "Henryka", attends: false },
    marek: { label: "Marek", attends: false },
  });
  const [sleep, setSleep] = useState<boolean>(false);
  const [food, setFood] = useState<string>("");

  if (isError) <div>"BŁĄD"</div>;

  const handleSetAttendence = ({ who, attends }: AttendsChange) => {
    setAttendece((prev) => ({
      ...prev,
      [who]: { ...prev[who], attends: attends },
    }));
  };

  const handleSetSleep = (sleep: boolean) => setSleep(sleep);

  const handleSetFood = (food: string) => setFood(food);

  return (
    <S.Page>
      <S.Container>
        {/* {isLoading && <div> SPINNER PLACEHOLDER</div>} */}
        <Greetings />
        <Attendence
          attendence={attendence}
          onSetAttendence={handleSetAttendence}
        />
        <Sleep sleep={sleep} onSetSleep={handleSetSleep} />
        <Food onSetFood={handleSetFood} food={food} />
        <Button color="inherit" variant="outlined">
          ZAPISZ I WYŚLIJ
        </Button>
      </S.Container>
    </S.Page>
  );
}
