const flyData = [
  {
    "id": "f-35-lightning-ii",
    "navn": "F-35 Lightning II",
    "sub": "Lockheed Martin · USA · 5. generasjon",
    "badge": "Gen 5",
    "type": "jager",
    "search": "f-35 lightning ii usa norge nederland belgia italia danmark storbritannia",
    "specs": {
      "Toppfart": "Mach 1,6",
      "Rekkevidde": "2 220 km",
      "Tak": "15 240 m",
      "Motorer": "1× F135 turbofan"
    },
    "brukere": [
      "USA",
      "Norge",
      "Nederland",
      "Italia",
      "Storbritannia",
      "Danmark",
      "Belgia",
      "Polen"
    ],
    "highlight": "Verdens mest avanserte multirolle stealthjager. Brukes av flest NATO-land av femte generasjons fly.",
    "bilde": "assets/F35A.jpg",
    "innhold": "Verdens mest avanserte multirolle stealthjager. Brukes av flest NATO-land av femte generasjons fly. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "f-22-raptor",
    "navn": "F-22 Raptor",
    "sub": "Lockheed Martin / Boeing · USA · 5. generasjon",
    "badge": "Gen 5",
    "type": "jager",
    "search": "f-22 raptor usa lockheed",
    "specs": {
      "Toppfart": "Mach 2,25",
      "Rekkevidde": "2 960 km",
      "Tak": "19 812 m",
      "Motorer": "2× F119-PW-100"
    },
    "brukere": [
      "USA (kun)"
    ],
    "highlight": "Overlegen luftherredømmejager med supercruise-evne. Eksporteres ikke — kun USA opererer F-22.",
    "bilde": "assets/f-22-raptor.png",
    "innhold": "Overlegen luftherredømmejager med supercruise-evne. Eksporteres ikke — kun USA opererer F-22. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "eurofighter-typhoon",
    "navn": "Eurofighter Typhoon",
    "sub": "BAE / Airbus / Leonardo · Europa · 4.5. gen",
    "badge": "Gen 4.5",
    "type": "jager",
    "search": "eurofighter typhoon storbritannia tyskland italia spania",
    "specs": {
      "Toppfart": "Mach 2,0",
      "Rekkevidde": "2 900 km",
      "Tak": "19 812 m",
      "Motorer": "2× EJ200 turbofan"
    },
    "brukere": [
      "Storbritannia",
      "Tyskland",
      "Italia",
      "Spania"
    ],
    "highlight": "Ryggraden i europeisk luftforsvar. Supercruise-kapabel og svært manøvreringsdyktig i luftkamp.",
    "bilde": "assets/eurofighter-typhoon.png",
    "innhold": "Ryggraden i europeisk luftforsvar. Supercruise-kapabel og svært manøvreringsdyktig i luftkamp. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "dassault-rafale",
    "navn": "Dassault Rafale",
    "sub": "Dassault Aviation · Frankrike · 4.5. gen",
    "badge": "Gen 4.5",
    "type": "jager",
    "search": "dassault rafale frankrike hellas kroatia",
    "specs": {
      "Toppfart": "Mach 1,8",
      "Rekkevidde": "3 700 km",
      "Tak": "15 240 m",
      "Motorer": "2× SNECMA M88"
    },
    "brukere": [
      "Frankrike",
      "Hellas",
      "Kroatia"
    ],
    "highlight": "Fullt omnirolle-fly med både luftkamp-, angreps- og atomkapasitet. Eneste franske jager i produksjon.",
    "bilde": "assets/dassault-rafale.png",
    "innhold": "Fullt omnirolle-fly med både luftkamp-, angreps- og atomkapasitet. Eneste franske jager i produksjon. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "saab-jas-39-gripen",
    "navn": "Saab JAS 39 Gripen",
    "sub": "Saab AB · Sverige · 4.5. gen",
    "badge": "Gen 4.5",
    "type": "jager",
    "search": "saab jas 39 gripen sverige ungarn tsjekkia",
    "specs": {
      "Toppfart": "Mach 2,0",
      "Rekkevidde": "3 200 km",
      "Tak": "15 240 m",
      "Motor": "1× F404/RM12"
    },
    "brukere": [
      "Sverige",
      "Ungarn",
      "Tsjekkia"
    ],
    "highlight": "Lettvektsfly kjent for kostnadseffektivitet, STOL-evne og rask oppdragsbytte. Mye brukt i nordisk NATO.",
    "bilde": "assets/saab-jas-39-gripen.png",
    "innhold": "Lettvektsfly kjent for kostnadseffektivitet, STOL-evne og rask oppdragsbytte. Mye brukt i nordisk NATO. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "f-16-fighting-falcon",
    "navn": "F-16 Fighting Falcon",
    "sub": "General Dynamics / Lockheed · USA · 4. gen",
    "badge": "Gen 4",
    "type": "jager",
    "search": "f-16 fighting falcon usa belgia nederland norge danmark tyrkia romania",
    "specs": {
      "Toppfart": "Mach 2,05",
      "Rekkevidde": "4 220 km",
      "Tak": "15 240 m",
      "Motor": "1× F110 / F100"
    },
    "brukere": [
      "USA",
      "Belgia",
      "Nederland",
      "Norge*",
      "Danmark*",
      "Tyrkia",
      "Romania",
      "Polen*",
      "Portugal"
    ],
    "highlight": "Verdens mest produserte vestlige jagerfly. Mange NATO-land er i prosess med å erstatte den med F-35. (*fase ut)",
    "bilde": "assets/f-16-fighting-falcon.png",
    "innhold": "Verdens mest produserte vestlige jagerfly. Mange NATO-land er i prosess med å erstatte den med F-35. (*fase ut) Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "f-15-eagle-ex",
    "navn": "F-15 Eagle / EX",
    "sub": "McDonnell Douglas / Boeing · USA · 4. gen",
    "badge": "Gen 4",
    "type": "jager",
    "search": "f-15 eagle strike eagle usa",
    "specs": {
      "Toppfart": "Mach 2,5",
      "Rekkevidde": "5 745 km",
      "Tak": "20 000 m",
      "Motorer": "2× F100 / F110"
    },
    "brukere": [
      "USA"
    ],
    "highlight": "Raskeste NATO-jager i aktiv tjeneste. F-15EX er modernisert versjon med AESA-radar og økt våpenkapasitet.",
    "bilde": "assets/f-15-eagle-ex.png",
    "innhold": "Raskeste NATO-jager i aktiv tjeneste. F-15EX er modernisert versjon med AESA-radar og økt våpenkapasitet. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "f-a-18e-f-super-hornet",
    "navn": "F/A-18E/F Super Hornet",
    "sub": "Boeing · USA · 4.5. gen",
    "badge": "Gen 4.5",
    "type": "jager",
    "search": "fa-18 super hornet usa marine",
    "specs": {
      "Toppfart": "Mach 1,8+",
      "Rekkevidde": "2 346 km",
      "Tak": "15 240 m",
      "Motorer": "2× F414-GE-400"
    },
    "brukere": [
      "USA (US Navy)"
    ],
    "highlight": "Bærerskipsfly og ryggraden i US Navys luftmakt. Designet for operasjoner fra hangarskip.",
    "bilde": "assets/f-a-18e-f-super-hornet.png",
    "innhold": "Bærerskipsfly og ryggraden i US Navys luftmakt. Designet for operasjoner fra hangarskip. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "a-10-thunderbolt-ii",
    "navn": "A-10 Thunderbolt II",
    "sub": "Fairchild Republic · USA · Spesialangrep",
    "badge": "Angrep",
    "type": "angrep",
    "search": "a-10 thunderbolt warthog usa bakkestøtte",
    "specs": {
      "Toppfart": "706 km/t",
      "Rekkevidde": "4 150 km",
      "Tak": "13 716 m",
      "Kanon": "GAU-8 30mm gatling"
    },
    "brukere": [
      "USA"
    ],
    "highlight": "«Warthog» — dedikert bakkestøttefly med pansret cockpit og beryktet 30mm gatling-kanon mot pansrede mål.",
    "bilde": "assets/a-10-thunderbolt-ii.png",
    "innhold": "«Warthog» — dedikert bakkestøttefly med pansret cockpit og beryktet 30mm gatling-kanon mot pansrede mål. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "panavia-tornado",
    "navn": "Panavia Tornado",
    "sub": "BAE / MBB / Aeritalia · Europa · 4. gen",
    "badge": "Gen 4",
    "type": "angrep",
    "search": "panavia tornado storbritannia italia",
    "specs": {
      "Toppfart": "Mach 2,2",
      "Rekkevidde": "3 890 km",
      "Tak": "15 240 m",
      "Motorer": "2× RB199 turbofan"
    },
    "brukere": [
      "Storbritannia*",
      "Italia*"
    ],
    "highlight": "Variabel-vinge angrepsfly fra den kalde krigen. Gradvis erstattes av Typhoon og F-35. (*avvikles)",
    "bilde": "assets/panavia-tornado.png",
    "innhold": "Variabel-vinge angrepsfly fra den kalde krigen. Gradvis erstattes av Typhoon og F-35. (*avvikles) Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "b-52-stratofortress",
    "navn": "B-52 Stratofortress",
    "sub": "Boeing · USA · Strategisk bomber",
    "badge": "Bomber",
    "type": "bomber",
    "search": "b-52 stratofortress boeing usa bombefly",
    "specs": {
      "Toppfart": "1 047 km/t",
      "Rekkevidde": "14 080 km",
      "Tak": "15 240 m",
      "Motorer": "8× TF33 turbofan"
    },
    "brukere": [
      "USA (USAF)"
    ],
    "highlight": "I tjeneste siden 1955 og planlagt til 2050+. Bærer konvensjonelle og atomvåpen over interkontinentale avstander.",
    "bilde": "assets/b-52-stratofortress.png",
    "innhold": "I tjeneste siden 1955 og planlagt til 2050+. Bærer konvensjonelle og atomvåpen over interkontinentale avstander. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "b-2-spirit",
    "navn": "B-2 Spirit",
    "sub": "Northrop Grumman · USA · Stealth bomber",
    "badge": "Stealth",
    "type": "bomber",
    "search": "b-2 spirit northrop stealth bomber usa",
    "specs": {
      "Toppfart": "1 010 km/t",
      "Rekkevidde": "11 100 km",
      "Tak": "15 240 m",
      "Nyttelast": "18 000 kg våpen"
    },
    "brukere": [
      "USA (kun 21 stk)"
    ],
    "highlight": "Flying wing stealth-bomber. Nesten usynlig for radar. Kan levere konvensjonelle og atomvåpen dypt inne i fiendtlig territorium.",
    "bilde": "assets/b-2-spirit.png",
    "innhold": "Flying wing stealth-bomber. Nesten usynlig for radar. Kan levere konvensjonelle og atomvåpen dypt inne i fiendtlig territorium. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "e-3-sentry-awacs",
    "navn": "E-3 Sentry (AWACS)",
    "sub": "Boeing · USA / NATO · Overvåking",
    "badge": "Spesial",
    "type": "spesial",
    "search": "e-3 sentry awacs nato overvåking",
    "specs": {
      "Toppfart": "855 km/t",
      "Rekkevidde": "7 400 km",
      "Maks høyde": "10 670 m",
      "Radar": "AN/APY-2 360°"
    },
    "brukere": [
      "NATO (felles)",
      "USA",
      "Storbritannia",
      "Frankrike"
    ],
    "highlight": "NATO-alliansens øyne i luften. Koordinerer luftoperasjoner og oppdager fly på lang avstand via den karakteristiske rotodomen.",
    "bilde": "assets/e-3-sentry-awacs.png",
    "innhold": "NATO-alliansens øyne i luften. Koordinerer luftoperasjoner og oppdager fly på lang avstand via den karakteristiske rotodomen. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "p-8-poseidon",
    "navn": "P-8 Poseidon",
    "sub": "Boeing · USA · Maritim patrulje",
    "badge": "Spesial",
    "type": "spesial",
    "search": "p-8 poseidon boeing maritim patrulje usa norge",
    "specs": {
      "Toppfart": "907 km/t",
      "Rekkevidde": "8 300 km",
      "Tak": "12 500 m",
      "Motorer": "2× CFM56-7B"
    },
    "brukere": [
      "USA",
      "Norge",
      "Storbritannia",
      "Tyskland",
      "Canada"
    ],
    "highlight": "Ubåtjeger og maritim overvåker. Basert på Boeing 737. Nøkkelrolle i NATO-patrulje over Atlanterhavet og Nordsjøen.",
    "bilde": "assets/p-8-poseidon.png",
    "innhold": "Ubåtjeger og maritim overvåker. Basert på Boeing 737. Nøkkelrolle i NATO-patrulje over Atlanterhavet og Nordsjøen. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "c-17-globemaster-iii",
    "navn": "C-17 Globemaster III",
    "sub": "Boeing · USA · Strategisk transport",
    "badge": "Transport",
    "type": "spesial",
    "search": "c-17 globemaster transport usa storbritannia",
    "specs": {
      "Toppfart": "833 km/t",
      "Rekkevidde": "10 400 km",
      "Nyttelast": "77 519 kg",
      "Motorer": "4× F117-PW-100"
    },
    "brukere": [
      "USA",
      "Storbritannia",
      "Canada",
      "Australia",
      "NATO SAC"
    ],
    "highlight": "Strategisk tungtransportfly som kan lande på korte og uanlagte baner. Ryggraden i NATOs logistikk og hurtig deployering.",
    "bilde": "assets/c-17-globemaster-iii.png",
    "innhold": "Strategisk tungtransportfly som kan lande på korte og uanlagte baner. Ryggraden i NATOs logistikk og hurtig deployering. Her kan du skrive mer detaljert innhold om flyet direkte i data.js."
  },
  {
    "id": "aw101-sar-queen",
    "navn": "AW101 SAR QUEEN",
    "sub": "Leonardo · Italia · Helikopter",
    "badge": "SAR",
    "type": "helikopter",
    "search": "aw101 sar queen helikopter norge redning sar 330 skvadron",
    "specs": {
      "Toppfart": "300 km/t",
      "Rekkevidde": "1 390 km",
      "Flytak": "4 500 m",
      "Motorer": "3× General Electric CT7"
    },
    "brukere": [
      "Norge"
    ],
    "highlight": "AW101 SAR Queen brukes av Norge som redningshelikopter gjennom Luftforsvarets 330 skvadron.",
    "bilde": "assets/aw101-sar-queen.png",
    "innhold": "AW101 SAR Queen er Norges redningshelikopter og brukes til søk, redning og ambulanseoppdrag. Helikopteret opereres av Luftforsvarets 330 skvadron og er laget for krevende værforhold, lang rekkevidde og redningsoppdrag over både land og sjø."
  },
  {
    "id": "bell-412",
    "navn": "Bell 412",
    "sub": "Bell Helicopter · USA / Canada · Militært transporthelikopter",
    "badge": "Helikopter",
    "type": "helikopter",
    "search": "bell 412 helikopter norge transport militær støtte",
    "specs": {
      "Toppfart": "Ca. 259 km/t",
      "Rekkevidde": "Ca. 745 km",
      "Flytak": "Ca. 6 100 m",
      "Motorer": "2× Pratt & Whitney Canada PT6T"
    },
    "brukere": [
      "Norge"
    ],
    "highlight": "Mellomstort flerbrukshelikopter brukt til transport, støtteoppdrag og beredskap.",
    "bilde": "assets/bell-412.png",
    "innhold": "Bell 412 er et mellomstort flerbrukshelikopter som har vært brukt av Luftforsvaret til transport, støtteoppdrag, beredskap og militære operasjoner. Helikopteret er kjent for robust konstruksjon, god løfteevne og fleksibel bruk i nordiske forhold."
  },
  {
    "id": "c-130j-super-hercules",
    "navn": "C-130J Super Hercules",
    "sub": "Lockheed Martin · USA · Taktisk transportfly",
    "badge": "Transport",
    "type": "spesial",
    "search": "c-130j super hercules transport norge nato lockheed hercules taktisk transport",
    "specs": {
      "Toppfart": "Ca. 670 km/t",
      "Rekkevidde": "Ca. 3 300 km",
      "Flytak": "Ca. 8 600 m",
      "Motorer": "4× Rolls-Royce AE 2100D3 turboprop"
    },
    "brukere": [
      "USA",
      "Norge",
      "Storbritannia",
      "Italia",
      "Danmark",
      "Frankrike",
      "Tyskland",
      "Canada",
      "Nederland",
      "Belgia",
      "Polen",
      "Romania"
    ],
    "highlight": "Taktisk transportfly brukt til frakt, personelltransport og operasjoner fra krevende rullebaner.",
    "bilde": "assets/c-130j-super-hercules.png",
    "innhold": "C-130J Super Hercules er et taktisk transportfly brukt til frakt, personelltransport, fallskjermdropp, medisinsk evakuering og støtte til militære operasjoner. Flyet kan operere fra korte og krevende rullebaner, noe som gjør det svært nyttig i NATO-operasjoner."
  }
];