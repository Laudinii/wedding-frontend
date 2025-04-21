import { useParams } from "react-router-dom";
import Attendence from "./components/Attendence";
import Greetings from "./components/Greetings";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getInvitation } from "./api";
import Sleep from "./components/Sleep/Sleep";
import Food from "./components/Food";

export default function InvitationPage() {
  const { id } = useParams();
  const { isLoading, isError } = useQuery({
    queryKey: ["get-invitation-details"],
    queryFn: () => getInvitation(id),
    enabled: !!id,
  });

  if (isError) <div>"BŁĄD"</div>;

  return (
    <S.Container>
      {isLoading && <div> SPINNER PLACEHOLDER</div>}
      <Greetings />
      <Attendence />
      <Sleep />
      <Food />
    </S.Container>
  );
}
