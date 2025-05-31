import * as S from "./styles";

export default function Greetings() {
  return (
    <S.Container>
      <S.TopArea>
        <S.PhotoWrapper>
          <S.StyledImage src="/couple.png" alt="Wedding couple" />
        </S.PhotoWrapper>
      </S.TopArea>
      <S.NamesContainer>
        <S.Name>PAULA</S.Name>
        <S.NameAmpersand>oraz</S.NameAmpersand>
        <S.Name>KAMIL</S.Name>
      </S.NamesContainer>
      <S.InviteTextContainer>
        Z wielką radością zapraszają
      </S.InviteTextContainer>
      <S.InviteeContainer>
        <S.Invitee>
          Henrykę <span>i</span> Marka
        </S.Invitee>
      </S.InviteeContainer>
      <S.InviteDescriptionContainer>
        na swój ślub i wesele, które odbędzie się <br />w Osadzie 49, ul.
        Cząstkowo 49
      </S.InviteDescriptionContainer>
      <S.DatesContainer>
        <S.DayMonth>
          <S.Topline></S.Topline>
          <S.DayItem>
            <div>SOBOTA</div>
            <span></span>
          </S.DayItem>
          <S.Topline></S.Topline>
        </S.DayMonth>

        <S.DatesMiddle>
          <div className="day">16</div>
          <div className="year">08.2025</div>
        </S.DatesMiddle>
        <S.DayMonth>
          <S.Topline></S.Topline>
          <S.MonthItem>
            <span></span>
            <div> 15:00</div>
          </S.MonthItem>
          <S.Topline></S.Topline>
        </S.DayMonth>
      </S.DatesContainer>
      <S.Summary>
        Będzie nam bardzo miło celebrować ten czas razem z Wami! Prosimy o
        potwierdzenie przybycia do dnia 10.06.2025. Możecie to zrobić poniżej
        lub kontaktując się bezpośrednio z nami.
        <S.Numbers>
          <div>
            <i>Paula: 502 986 922</i>
          </div>
          <div>
            <i>Kamil: 531 190 637</i>
          </div>
        </S.Numbers>
      </S.Summary>
    </S.Container>
  );
}
