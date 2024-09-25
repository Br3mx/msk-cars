import React from "react";
import style from "./Regulations.module.scss";
import { Link } from "react-router-dom";
const Regulations = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Regulamin korzystania ze strony internetowej</h1>
        <ul>
          <li>
            <i>"Postanowienia ogólne" - </i>
            Niniejszy regulamin określa zasady korzystania ze strony
            internetowej prowadzonej przez{" "}
            <strong>M.S.K Usługi Transportowe Łukasz Masek, M.S.K.CARS</strong>,
            z siedzibą w 58-260 Bielawa os, XXV lecia 27/20, NIP: 882-169-24-63.
          </li>
          <li>
            <i>"Warunki korzystania z serwisu" - </i>
            Korzystanie z serwisu jest dobrowolne. Użytkownik zobowiązuje się do
            korzystania z serwisu w sposób zgodny z obowiązującymi przepisami
            prawa oraz postanowieniami niniejszego regulaminu.
          </li>
          <li>
            <i>"Formularz kontaktowy" - </i>
            Za pośrednictwem formularza kontaktowego użytkownik może przesyłać
            zapytania do Administratora. W celu skorzystania z formularza
            wymagane jest podanie następujących danych osobowych: imię i
            nazwisko, adres e-mail, numer telefonu oraz tytuł i treść
            wiadomości. Dane te są przetwarzane zgodnie z{" "}
            <Link to={"/policy"} className={style.link}>
              Polityką Prywatności.
            </Link>
          </li>
          <li>
            <i>"Odpowiedzialność" - </i>
            Administrator nie ponosi odpowiedzialności za czas oczekiwania na
            odpowiedź oraz ewentualne problemy techniczne związane z
            funkcjonowaniem formularza kontaktowego.
          </li>
          <li>
            <i>"Postanowienia końcowe" - </i>
            Regulamin może być zmieniany w dowolnym momencie przez
            Administratora. Zmiany wchodzą w życie z dniem ich opublikowania na
            stronie internetowej.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Regulations;
