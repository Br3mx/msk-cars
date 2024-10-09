import React from "react";
import style from "./Policy.module.scss";
const Policy = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Polityka Prywatności</h1>
        <div className={style.list}>
          <ul>
            <li>
              <i>"Administrator danych osobowych" - </i>
              Administratorem danych osobowych jest{" "}
              <strong>
                M.S.K Usługi Transportowe Łukasz Masek, M.S.K.CARS
              </strong>
              , z siedzibą w 58-260 Bielawa os, XXV lecia 27/20, NIP:
              882-169-24-63.
            </li>
            <li>
              <i>"Zakres zbieranych danych" - </i>W ramach korzystania z
              formularza kontaktowego na naszej stronie internetowej, zbieramy
              następujące dane osobowe: imię i nazwisko, adres e-mail, numer
              telefonu oraz tytuł i treść wiadomości.
            </li>
            <li>
              <i>"Cel przetwarzania danych" - </i>
              Dane osobowe są przetwarzane w celu udzielenia odpowiedzi na
              zapytania użytkowników, które są przesyłane za pośrednictwem
              formularza kontaktowego na stronie internetowej. Przetwarzanie
              danych jest oparte na zgodzie użytkownika lub w celu wykonania
              działań na żądanie użytkownika.
            </li>
            <li>
              <i>"Podstawa prawna przetwarzania" - </i>
              Dane osobowe przetwarzane są zgodnie z art. 6 ust. 1 lit. a) RODO,
              tj. na podstawie dobrowolnie wyrażonej zgody, oraz lit. b) RODO w
              przypadku, gdy przetwarzanie jest niezbędne do wykonania umowy.
            </li>
            <li>
              <i>"Odbiorcy danych" - </i>
              Dane osobowe mogą być udostępniane podmiotom świadczącym usługi na
              rzecz Administratora, takim jak firma hostingowa, odpowiedzialna
              za utrzymanie strony. Dane osobowe przechowywane są przez okres
              niezbędny do realizacji celu, w jakim zostały zebrane, tj. do
              momentu odpowiedzi na zapytanie lub przez okres 6 miesięcy od
              zakończenia komunikacji.
            </li>
            <li>
              <i>"Prawa użytkownika" - </i>
              Użytkownik ma prawo do wglądu do swoich danych osobowych, ich
              poprawiania, usunięcia, ograniczenia przetwarzania oraz wniesienia
              sprzeciwu wobec przetwarzania danych. Użytkownik ma również prawo
              do wycofania zgody na przetwarzanie danych w dowolnym momencie.
            </li>
            <li>
              <i>"Pliki cookies" - </i>
              Nasza strona internetowa używa plików cookies w celu poprawy jej
              funkcjonalności oraz zapewnienia lepszego doświadczenia
              użytkownika. Pliki cookies mogą być również używane do celów
              statystycznych oraz marketingowych. Użytkownik może zarządzać
              plikami cookies za pomocą ustawień swojej przeglądarki.
            </li>
            <li>
              <i>"Kontakt w sprawach związanych z danymi osobowymi" - </i>W
              przypadku jakichkolwiek pytań dotyczących przetwarzania danych
              osobowych, prosimy o kontakt pod adresem:{" "}
              <strong>devprzemas@gmail.com.</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
