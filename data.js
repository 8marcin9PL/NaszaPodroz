const GAME_DATA = {

    players: [
        "Marcin",
        "Helenka"
    ],

    expedition: {
        title: "Nasza podróż",
        anniversary: "4 lata małżeństwa",
        relationship: "6 lat razem",
        date: "08.07.2026",
        city: "Berlin",
        flight: "HM 0807"
    },

    continents: [

        {
            id: "europa",
            name: "Europa",
            emoji: "🇪🇺",
            title: "Nasza historia",

            intro: [
                "Każda wielka podróż ma swój pierwszy krok.",
                "Wasza rozpoczęła się sześć lat temu właśnie tutaj — w Europie.",
                "To tutaj poznaliście się, zakochaliście i powiedzieliście sobie „tak”.",
                "Zanim ruszymy dalej, wróćmy na chwilę do początku.",
                "Bo każda piękna historia zasługuje na to, żeby opowiedzieć ją jeszcze raz."
            ],

            questions: [
                "Jaki moment z naszych 6 lat najlepiej pokazuje, kim jesteśmy jako para?",
                "Kiedy ostatnio pomyślałeś(-aś): „To właśnie dlatego się w Tobie zakochałem(-am)”?",
                "Co zrobiliśmy razem, czego 6 lat temu nigdy byśmy się po sobie nie spodziewali?",
                "Jaką wspólną decyzję podjąłbyś(-łabyś) jeszcze raz bez chwili wahania?",
                "Z czego śmiejesz się najbardziej, kiedy wspominasz nasze wspólne lata?",
                "Co w naszym związku przez te 6 lat zmieniło się najbardziej na lepsze?",
                "Jakie wspomnienie chciał(a)byś przeżyć jeszcze raz?",
                "Za co jesteś najbardziej dumny(-a), patrząc na nasze wspólne życie?"
            ]
        },

        {
            id: "asia",
            name: "Azja",
            emoji: "🌏",
            title: "Smaki świata",

            intro: [
                "Niektóre miejsca pamięta się oczami.",
                "Inne... smakiem.",
                "To etap dla ludzi, którzy wiedzą, że dobra podróż prawie zawsze kończy się przy wspólnym stole.",
                "Dzisiaj odwiedzimy miejsca pachnące przyprawami, świeżym makaronem i ulicznym jedzeniem."
            ],

            questions: [
                "Jakie wspólne jedzenie zawsze będzie Ci się kojarzyć z nami?",
                "Możesz wybrać tylko jedną kolację: kurczak z grilla w Amazonii, stek po safari w Parku Krugera, rodzinna trattoria w Toskanii czy night market w Azji Południowo-Wschodniej. Którą wybierasz i dlaczego?",
                "Jakiej kuchni świata najbardziej brakuje nam na naszej podróżniczej liście?",
                "Gdybyśmy przez miesiąc mogli jeść tylko kuchnię jednego kraju, którą wybierasz?",
                "Gdybyśmy otworzyli własną restaurację, jak by się nazywała?",
                "Jakie miejsce na świecie odwiedzilibyśmy głównie dla jedzenia?",
                "Jakie danie chciał(a)byś kiedyś razem ugotować?",
                "Jakie danie najlepiej opisuje nas jako parę?"
            ]
        },
        {
            id: "antarctica",
            name: "Antarktyda",
            emoji: "❄️",
            title: "Ostatni rok",

            intro: [
                "Nie każda część podróży jest łatwa.",
                "Czasem trzeba zwolnić.",
                "Złapać oddech.",
                "Spojrzeć za siebie.",
                "Ten etap nie jest po to, żeby rozdrapywać trudne chwile.",
                "Jest po to, żeby zobaczyć, ile już razem przeszliście.",
                "A potem ruszyć dalej."
            ],

            questions: [
                "Czego nauczył nas ten rok?",
                "Jaką jedną rzecz chciał(a)byś zostawić za sobą?",
                "Co chciał(a)byś zabrać ze sobą w kolejne lata?",
                "Co chciał(a)byś, żebyśmy częściej robili tylko we dwoje?",
                "Jakie miejsce najbardziej kojarzy Ci się z poczuciem spokoju?",
                "Jak wygląda Twój idealny dzień odpoczynku?",
                "Co najbardziej chciał(a)byś usłyszeć ode mnie częściej?",
                "Za co jesteś dziś najbardziej wdzięczny(-a)?"
            ]
        },

        {
            id: "north-america",
            name: "Ameryka Północna",
            emoji: "🧭",
            title: "Bezpieczna przystań",

            intro: [
                "Każda podróż ma odcinki, które są bardziej wymagające.",
                "Tutaj nie chodzi o zwiedzanie.",
                "Chodzi o znalezienie kierunku wtedy, gdy droga robi się trudniejsza.",
                "To etap o zaufaniu, wsparciu i odnajdywaniu drogi do siebie nawzajem."
            ],

            questions: [
                "Kiedy czujesz się przy mnie najbardziej spokojnie?",
                "Jak rozpoznajesz, że potrzebujesz mojego wsparcia?",
                "Co robię, co daje Ci poczucie bezpieczeństwa?",
                "Jak wyglądałaby nasza idealna leniwa niedziela bez obowiązków?",
                "Jakiego nowego wspólnego rytuału jeszcze nam brakuje?",
                "Jakie moje małe gesty znaczą dla Ciebie najwięcej?",
                "Kiedy ostatnio poczułeś(-aś), że jesteśmy naprawdę drużyną?",
                "Co sprawia, że czujesz się przy mnie najbardziej sobą?"
            ]
        },
        {
            id: "south-america",
            name: "Ameryka Południowa",
            emoji: "✈️",
            title: "Nasz świat",

            intro: [
                "Czas spakować plecak.",
                "Ten etap jest o ciekawości świata.",
                "O spontanicznych pomysłach.",
                "I o wszystkich miejscach, które jeszcze czekają gdzieś za horyzontem.",
                "To kontynent marzycieli i odkrywców."
            ],

            questions: [
                "Gdybyśmy mogli mieszkać rok w jednym kraju, który byś wybrał(a)?",
                "Gdybyśmy mogli jutro kupić bilety w jedną stronę, dokąd lecimy?",
                "Jakie miasto chcielibyśmy kiedyś odkrywać bez planu?",
                "Która wspólna podróż najbardziej nas zmieniła?",
                "Jakie miejsce najbardziej chciał(a)byś mi jeszcze pokazać?",
                "W którym miejscu świata najbardziej chciał(a)byś spędzić miesiąc bez pracy?",
                "Jak będzie wyglądał nasz idealny dzień podczas podróży?",
                "Jakie miejsce jest najwyżej na naszej podróżniczej liście marzeń?"
            ]
        },

        {
            id: "oceania",
            name: "Australia i Oceania",
            emoji: "🦘",
            title: "Przyszłość",

            intro: [
                "To najdalszy etap naszej wyprawy.",
                "Jeszcze tam nie dotarliście.",
                "Właśnie dlatego jest taki ekscytujący.",
                "Tutaj będziecie rozmawiać o wszystkim, co dopiero przed Wami."
            ],

            questions: [
                "Co chciał(a)byś, żebyśmy zrobili w ciągu najbliższych 12 miesięcy?",
                "Jakiej jednej rzeczy chciał(a)byś nauczyć się razem ze mną?",
                "Jaką tradycję chcielibyśmy stworzyć jako rodzina?",
                "Jaką jedną podróż odkładamy zbyt długo?",
                "Czego najbardziej nie możesz się doczekać?",
                "Jakie wspomnienia chcemy stworzyć w najbliższych latach?",
                "Co chcielibyśmy kiedyś powiedzieć naszym dzieciom o miłości?",
                "Jaką jedną rzecz obiecujesz mi na kolejny rok?"
            ]
        },
        {
            id: "africa",
            name: "Afryka",
            emoji: "❤️",
            title: "Miłość",

            intro: [
                "Są miejsca, w których zachody słońca wydają się trwać trochę dłużej.",
                "To etap poświęcony temu, co sprawia, że po sześciu latach nadal wybieracie właśnie siebie.",
                "Bez pośpiechu.",
                "Po prostu porozmawiajcie o miłości."
            ],

            questions: [
                "Co sprawia, że nadal wybierasz właśnie mnie?",
                "Jaką moją cechę chciał(a)byś, żeby odziedziczyły nasze dzieci?",
                "Jak wygląda nasza idealna randka?",
                "Jakie jedno wspomnienie zachował(a)byś na zawsze?",
                "Jaką moją minę albo zachowanie uwielbiasz najbardziej?",
                "Jak wyglądałby nasz idealny spontaniczny dzień, gdybyśmy jutro nie musieli iść do pracy?",
                "Jak chciał(a)byś świętować naszą 20. rocznicę ślubu?",
                "Za co najbardziej lubisz nasze wspólne życie?"
            ]
        }

    ],

    missions: [

        "🤗 Przytulcie się przez 60 sekund.",

        "🏋️ Zróbcie jednocześnie 10 przysiadów. Kto pierwszy odpadnie, stawia deser.",

        "📸 Każde z Was wybiera jedno zdjęcie z telefonu, którego druga osoba dawno nie widziała.",

        "🌍 Wybierzcie jedno miejsce na świecie, które odwiedzicie w ciągu najbliższych 3 lat.",

        "🥂 Wznieście toast. Każde mówi jedną rzecz, za którą jest dziś wdzięczne.",

        "🍽️ Zaplanujcie wspólną kolację inspirowaną krajem, którego jeszcze nie odwiedziliście.",

        "📝 Każde zapisuje jedno marzenie na następny rok. Schowajcie kartki i wróćcie do nich za rok."

    ],

    finalReward: {

        title: "😘 Całujcie się przez minutę.",

        text: [
            "Przez najbliższe 60 sekund nie rozmawiajcie.",
            "Po prostu bądźcie razem."
        ]

    },

    narrator: {
        welcome: [
            "Witajcie.",
            "Nazywam się ChatGPT.",
            "Dzisiaj będę Opiekunem Waszej wyprawy.",
            "Nie będę prowadził rozmowy.",
            "Będę odzywał się tylko wtedy, gdy będzie to potrzebne.",
            "Reszta tej historii należy do Was."
        ],

        afterMission: [
            "Dobry przystanek.",
            "Pakujemy plecaki?",
            "Możemy ruszać dalej.",
            "Jeszcze jeden wpis w Waszym paszporcie.",
            "Świat nadal na Was czeka.",
            "W drogę."
        ],

        continentFinished: [
            "Pierwszy wpis w paszporcie już jest.",
            "Kolejny etap czeka.",
            "Możemy ruszać dalej."
        ],

        final: [
            "Paszport jest już pełen.",
            "Reszta stron czeka na kolejne wspólne lata.",
            "Do zobaczenia podczas następnej wyprawy."
        ]

    }

};