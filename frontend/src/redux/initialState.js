const initialState = {
  common: {
    user: {
      role: "",
    },
    phoneNumber: {
      phone1: "(+48) 533-073-301",
      phone2: "(+48) 504-598-563",
    },
    address: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.614997195598!2d16.808683476230733!3d50.5971088767936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e252e72615e9f%3A0x6394d02562c853ba!2zS29sZWpvd2EgMSwgNTctMjAwIFrEhWJrb3dpY2UgxZpsxIVza2ll!5e0!3m2!1sen!2spl!4v1718812657384!5m2!1sen!2spl",
      lokalization: "57-200 Ząbkowice Śląskie ul. Kolejowa 1",
    },
    promotion: {
      promotionImg: {
        data: [],
      },
    },
  },
  detailing: {
    firstSection: {
      title: "ODKRYJ PERFEKCJĘ TWOJEGO SAMOCHODU!",
      subtitle: "Profesjonalny autodetailing na",
      strong: "NAJWYŻSZYM POZIOMIE!",
    },
    secondSection: {
      title: "Czy Twój samochód zasługuje na luksusową pielęgnację?",
      text: (
        <>
          U nas w MSK CARS przekształcamy zwykłe auta w prawdziwe dzieła sztuki!
          <br />
          Oferujemy kompleksowe usługi autodetailingu, które przywrócą blask i
          ochronę każdemu pojazdowi.
        </>
      ),
    },
    thirdSection: {
      title: "Sprawdź nasze realizacje",
    },
    fourthSection: {
      title: "Dlaczego MSK CARS?",
      list: [
        "Najwyższej Jakości Produkty: Używamy tylko sprawdzonych i renomowanych produktów.",
        "Indywidualne Podejście: Każdy samochód traktujemy z najwyższą starannością, dostosowując usługi do Twoich potrzeb.",
        "Satysfakcja Gwarantowana: Twoje zadowolenie to nasz priorytet! Zaufaj nam i przekonaj się sam.",
      ],
      title2: "Znajdź nas",
      title3: "Umów Wizytę",
    },
    offer: {
      title: "Auto Detailing",
      list: [
        "Powłoki ceramiczne - od 900 zł",
        "Korekta lakieru - 200 zł",
        "Detailing wnętrza - od 300 zł",
        "Pranie tapicerki - od 250 zł",
      ],
      title2: "Regeneracja reflektorów - 150 zł",
      title3: "Folie ochronne",
      title4: "Przyciemnianie szyb i lamp - od 400 zł",
      title5: "Samochody na zamówienie",
    },
    realization: {
      carsDetailing: {
        data: [],
      },
    },
    about: {
      title: "O nas",
      text: (
        <>
          <h5 style={{ textAlign: "center" }}>
            <strong>
              MSK-Cars to firma, która szczyci się świadczeniem najwyższej
              jakości usług detailingowych oraz personalizowanym procesem zakupu
              samochodów na zamówienie, dostosowanym do unikalnych potrzeb i
              preferencji naszych klientów.
            </strong>
          </h5>
          <br />
          Nasze usługi detailingowe mają na celu przywrócenie i podkreślenie
          piękna Twojego pojazdu, sprawiając, że będzie wyglądał jak nowy.
          Oferujemy szeroki zakres opcji detailingu.
          <br />
          Używamy tylko najwyższej jakości produktów oraz nowoczesnego sprzętu,
          aby dostarczyć rezultaty, które przewyższają oczekiwania.
          <br />
          <h5
            style={{
              textAlign: "center",
              paddingTop: "20px",
              marginBottom: "-15px",
            }}
          >
            <strong>Zakup Samochodów na Zamówienie W MSK-Cars!</strong>
          </h5>
          <br />
          Rozumiemy, że znalezienie idealnego samochodu może być trudnym
          zadaniem.
          <br />
          Dlatego oferujemy spersonalizowaną usługę zakupu samochodów,
          poszukując i nabywając pojazdy w imieniu naszych klientów. Niezależnie
          od tego, czy szukasz konkretnego modelu, samochodu klasycznego, czy
          luksusowego, jesteśmy tutaj, aby spełnić Twoje marzenia motoryzacyjne.
          <br />
          Pracujemy z Tobą, aby zrozumieć Twoje preferencje, wymagania i budżet.
          <br />
          Zapraszamy do MSK-Cars, gdzie Twoje auto zyska nowy blask, a Ty
          spełnisz swoje marzenia o idealnym samochodzie !
        </>
      ),
    },
  },
  carsExport: {
    realization: {
      carsExport: {
        data: [],
      },
    },
    firstSection2: {
      title: "Szukasz wymarzonego samochodu ?",
      text: (
        <>
          Zaufaj naszemu doświadczeniu i pasji do motoryzacji.
          <br /> Twoje marzenie o idealnym samochodzie jest w zasięgu ręki!
        </>
      ),
    },
    secondSection2: {
      text1: (
        <>
          W MSK-Cars specjalizujemy się w sprowadzaniu samochodów na zamówienie,
          dostosowanych do Twoich indywidualnych potrzeb i preferencji. <br />
          Dzięki naszemu doświadczeniu i pasji do motoryzacji, jesteśmy w stanie
          znaleźć idealny pojazd dla każdego klienta.
        </>
      ),
      text2: (
        <>
          Zapraszamy do zapoznania się z naszą ofertą i skorzystania z
          możliwości zamówienia samochodu swoich marzeń. Skontaktuj się z nami
          telefonicznie lub mailowo poprzez formularz kontaktowy.
          <br />
          <strong>Twoje wymarzone auto czeka na Ciebie!</strong>
          <br />
          Spełnij swoje marzenie o idealnym samochodzie z MSK-Cars!
        </>
      ),
    },
    thirdSection2: {},
    fourthSection2: {
      title: "MSK-CARS - Odwiedź Nas",
      text: (
        <>
          Chcesz zobaczyć, jak realizujemy indywidualne zamówienia i dbamy o
          każdy szczegół?
          <br />
          Zapraszamy do MSK Cars! Nasza siedziba to miejsce, gdzie każdy
          samochód na zamówienie przechodzi dokładny proces detailingowy, aby
          spełniał najwyższe standardy jakości i estetyki. Odwiedź nas i
          przekonaj się, jak starannie przygotowujemy samochody, aby były
          idealne w każdym calu!
        </>
      ),
      title2: "Znajdź nas",
      title3: "Umów wizytę",
    },
  },
};

export default initialState;
