const initialState = {
  common: {
    phoneNumber: {
      phone1: "(+48) 533-073-301",
      phone2: "(+48) 504-598-563",
    },
    address: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.614997195598!2d16.808683476230733!3d50.5971088767936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e252e72615e9f%3A0x6394d02562c853ba!2zS29sZWpvd2EgMSwgNTctMjAwIFrEhWJrb3dpY2UgxZpsxIVza2ll!5e0!3m2!1sen!2spl!4v1718812657384!5m2!1sen!2spl",
      lokalization: "57-200 Ząbkowice Śląskie ul. Kolejowa 1",
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
      text: "U nas w MSK CARS przekształcamy zwykłe auta w prawdziwe dzieła sztuki! Oferujemy kompleksowe usługi autodetailingu, które przywrócą blask i ochronę każdemu pojazdowi.",
    },
    thirdSection: {
      title: "Sprawdź nasze realizacje",
      card: [
        {
          id: "1",
          img: "img/hyundai1.jpg",
          carMark: "Lorem Ipsum1",
        },
        {
          id: "2",
          img: "img/hyundai2.jpg",
          carMark: "Lorem Ipsum2",
        },
        {
          id: "3",
          img: "img/hyundai3.jpg",
          carMark: "Lorem Ipsum3",
        },
        {
          id: "4",
          img: "img/logo.png",
          carMark: "Lorem Ipsum4",
        },
      ],
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
        "Powłoki ceramiczne",
        "Korekta lakieru",
        "Czyszczenie wnętrza",
        "Pranie tapicerki",
      ],
      title2: "Regeneracja reflektorów",
      title3: "Folie ochronne",
      title4: "Przyciemnianie szyb i lamp",
    },
  },
};

export default initialState;
