import * as S from "./styles";

export default function Greetings() {
  return (
    <S.Container>
      <div>
        <S.Title>Będzie ślub</S.Title>
        <S.PhotoWrapper>
          <S.StyledImage src="/couple.png" alt="Wedding couple" />
        </S.PhotoWrapper>
      </div>
      <S.NamesContainer>
        <S.Name>PAULA</S.Name>
        <S.NameAmpersand>oraz</S.NameAmpersand>
        <S.Name>KAMIL</S.Name>
      </S.NamesContainer>
      <S.InviteTextContainer>
        Z wielką radością zapraszają
      </S.InviteTextContainer>
      <S.InviteeContainer>
        <S.Invitee>Henrykę Tarnacką</S.Invitee>{" "}
        <S.Invitee>Marka Tarnackiego</S.Invitee>
      </S.InviteeContainer>
      <S.InviteDescriptionContainer>
        na swój ślub i wesele, które odbędzie sie <b>Osadzie 49</b>, ul.
        <b>Cząstkowo 49</b>
      </S.InviteDescriptionContainer>
      <S.DatesContainer>DATY</S.DatesContainer>
      <div>
        Będzie nam bardzo miło celebrować ten czas razem z Wami! Prosimy o
        potwierdzenie przybycia do dnia 10.06.2025. Możecie to zrobić poniżej
        lub kontaktując się bezpośrednio z nami.
      </div>
      <div>Paula: 555 555 555</div>
      <div>Kamil: 666 666 666</div>
    </S.Container>
  );
}
