const ANIME_DATA = [

  {
    id: 1,
    title: "Naruto",
    type: "TV",
    score: 8.4,
    episodes: 220,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Naruto",
    description: "Naruto Uzumaki dia ninja tanora maniry ny ho Hokage."
  },

  {
    id: 2,
    title: "One Piece",
    type: "TV",
    score: 8.7,
    episodes: 1100,
    image: "https://placehold.co/400x550/14121e/ff2492?text=One+Piece",
    description: "Luffy sy ny ekipany dia mitety ranomasina mitady ny One Piece."
  },

  {
    id: 3,
    title: "Bleach",
    type: "TV",
    score: 8.2,
    episodes: 366,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Bleach",
    description: "Ichigo Kurosaki dia mahazo hery Shinigami ary miaro ny olombelona."
  },

  {
    id: 4,
    title: "Demon Slayer",
    type: "TV",
    score: 8.6,
    episodes: 63,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Demon+Slayer",
    description: "Tanjiro dia miady amin'ny demons mba hamonjena ny anabaviny."
  },

  {
    id: 5,
    title: "Jujutsu Kaisen",
    type: "TV",
    score: 8.5,
    episodes: 47,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Jujutsu+Kaisen",
    description: "Yuji Itadori dia miditra amin'ny tontolon'ny mpamosavy sy ny curses."
  },

  {
    id: 6,
    title: "Attack on Titan",
    type: "TV",
    score: 9.1,
    episodes: 89,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Attack+on+Titan",
    description: "Eren sy ny namany dia miady mba hiarovana ny olombelona amin'ny Titans."
  },

  {
    id: 7,
    title: "Dragon Ball",
    type: "TV",
    score: 8.4,
    episodes: 153,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Dragon+Ball",
    description: "Goku dia manomboka ny diany feno ady sy aventure."
  },

  {
    id: 8,
    title: "Dragon Ball Z",
    type: "TV",
    score: 8.8,
    episodes: 291,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Dragon+Ball+Z",
    description: "Goku sy ireo namany dia miaro ny Tany amin'ireo fahavalo mahery."
  },

  {
    id: 9,
    title: "Hunter x Hunter",
    type: "TV",
    score: 9.0,
    episodes: 148,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Hunter+x+Hunter",
    description: "Gon dia manomboka aventure mba hitady ny rainy."
  },

  {
    id: 10,
    title: "Death Note",
    type: "TV",
    score: 8.6,
    episodes: 37,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Death+Note",
    description: "Light Yagami dia mahita boky manana hery mahafaty."
  },

  {
    id: 11,
    title: "Solo Leveling",
    type: "TV",
    score: 8.8,
    episodes: 25,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Solo+Leveling",
    description: "Sung Jin-Woo dia mahazo hery manokana izay mampitombo ny heriny."
  },

  {
    id: 12,
    title: "Black Clover",
    type: "TV",
    score: 8.1,
    episodes: 170,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Black+Clover",
    description: "Asta, zazalahy tsy manana magic, dia mikatsaka ny ho Wizard King."
  },

  {
    id: 13,
    title: "My Hero Academia",
    type: "TV",
    score: 8.0,
    episodes: 170,
    image: "https://placehold.co/400x550/14121e/ff2492?text=My+Hero+Academia",
    description: "Izuku Midoriya dia manonofy ho superhero na dia tsy manana Quirk aza."
  },

  {
    id: 14,
    title: "Fullmetal Alchemist Brotherhood",
    type: "TV",
    score: 9.1,
    episodes: 64,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Fullmetal+Alchemist",
    description: "Edward sy Alphonse Elric dia mitady fomba hamerenana ny vatany."
  },

  {
    id: 15,
    title: "Tokyo Ghoul",
    type: "TV",
    score: 7.7,
    episodes: 48,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Tokyo+Ghoul",
    description: "Kaneki dia lasa zavaboary antsasaky ny olombelona sy ghoul."
  },

  {
    id: 16,
    title: "Chainsaw Man",
    type: "TV",
    score: 8.5,
    episodes: 12,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Chainsaw+Man",
    description: "Denji dia miaina fiainana vaovao rehefa lasa Chainsaw Man."
  },

  {
    id: 17,
    title: "Spy x Family",
    type: "TV",
    score: 8.5,
    episodes: 37,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Spy+x+Family",
    description: "Fianakaviana tsy mahazatra iray no miforona noho ny iraka miafina."
  },

  {
    id: 18,
    title: "One Punch Man",
    type: "TV",
    score: 8.5,
    episodes: 24,
    image: "https://placehold.co/400x550/14121e/ff2492?text=One+Punch+Man",
    description: "Saitama dia mahavita mandresy ny fahavalony amin'ny totohondry iray."
  },

  {
    id: 19,
    title: "Sword Art Online",
    type: "TV",
    score: 7.5,
    episodes: 96,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Sword+Art+Online",
    description: "Kirito dia voafandrika ao anatin'ny tontolon'ny lalao virtoaly."
  },

  {
    id: 20,
    title: "Haikyuu",
    type: "TV",
    score: 8.7,
    episodes: 85,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Haikyuu",
    description: "Hinata dia mikatsaka ny ho mpilalao volleyball tsara indrindra."
  },

  {
    id: 21,
    title: "Blue Lock",
    type: "TV",
    score: 8.2,
    episodes: 38,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Blue+Lock",
    description: "Mpilalao baolina kitra tanora no mifaninana ao amin'ny Blue Lock."
  },

  {
    id: 22,
    title: "Dr. Stone",
    type: "TV",
    score: 8.1,
    episodes: 57,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Dr+Stone",
    description: "Senku dia mampiasa ny siansa hamerenana indray ny sivilizasiona."
  },

  {
    id: 23,
    title: "Vinland Saga",
    type: "TV",
    score: 8.8,
    episodes: 48,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Vinland+Saga",
    description: "Thorfinn dia miaina aventure feno ady sy fikatsahana valifaty."
  },

  {
    id: 24,
    title: "Mob Psycho 100",
    type: "TV",
    score: 8.6,
    episodes: 37,
    image: "https://placehold.co/400x550/14121e/ff2492?text=Mob+Psycho+100",
    description: "Mob dia zazalahy manana hery psychic tena mahery."
  }

];
