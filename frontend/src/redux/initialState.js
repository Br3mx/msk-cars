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
    },
    realization: {
      car: [
        {
          id: "1",
          img: "hyundai1.jpg",
          carMark: "Hyundai1",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "2",
          img: "hyundai2.jpg",
          carMark: "Hyundai2",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "3",
          img: "hyundai3.jpg",
          carMark: "Hyundai3",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "4",
          img: "hyundai1.jpg",
          carMark: "Hyundai4",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "5",
          img: "hyundai2.jpg",
          carMark: "Hyundai5",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "6",
          img: "hyundai3.jpg",
          carMark: "Hyundai6",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "7",
          img: "hyundai1.jpg",
          carMark: "Hyundai7",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "8",
          img: "hyundai2.jpg",
          carMark: "Hyundai8",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "9",
          img: "hyundai3.jpg",
          carMark: "Hyundai9",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "10",
          img: "hyundai1.jpg",
          carMark: "Hyundai10",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "11",
          img: "hyundai2.jpg",
          carMark: "Hyundai11",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "12",
          img: "hyundai3.jpg",
          carMark: "Hyundai12",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "13",
          img: "hyundai1.jpg",
          carMark: "Hyundai13",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
        {
          id: "14",
          img: "hyundai2.jpg",
          carMark: "Hyundai14",
          restImg: ["hyundai1.jpg", "hyundai2.jpg", "hyundai3.jpg"],
          description:
            "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum",
        },
      ],
    },
  },
};

export default initialState;
