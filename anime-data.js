const ANIME_DATA = [];

/*
  AnimeZone
  Maka automatiquement ny anime sy ny sary avy amin'ny Jikan API
*/

const ANIME_API = "https://api.jikan.moe/v4";

async function loadAnimeData() {
  try {
    const response = await fetch(
      `${ANIME_API}/top/anime?limit=24`
    );

    if (!response.ok) {
      throw new Error("Tsy afaka naka anime tamin'ny API.");
    }

    const result = await response.json();

    const animeList = result.data.map(anime => ({
      id: anime.mal_id,

      title: anime.title || "Anime",

      type: anime.type || "TV",

      score: anime.score ?? "N/A",

      episodes: anime.episodes ?? "N/A",

      /*
        Ity no sary tena izy avy amin'ny MyAnimeList.
      */
      image:
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        "",

      description:
        anime.synopsis ||
        "Tsy mbola misy description ho an'ity anime ity.",

      year:
        anime.year ||
        anime.aired?.prop?.from?.year ||
        "N/A"
    }));

    /*
      Ampidirina ao amin'ny ANIME_DATA
      ireo anime azo avy amin'ny API.
    */
    ANIME_DATA.push(...animeList);

    /*
      Raha efa misy afficherAnime() ao amin'ny index.html,
      dia havaozina avy hatrany ny affichage.
    */
    if (typeof afficherAnime === "function") {
      afficherAnime(ANIME_DATA);
    }

  } catch (error) {

    console.error("Erreur AnimeZone :", error);

    /*
      Raha tsy mandeha ny API dia mampiseho
      ireo anime de secours.
    */
    ANIME_DATA.push(
      {
        id: 1,
        title: "Naruto",
        type: "TV",
        score: 8.4,
        episodes: 220,
        image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
        description:
          "Naruto Uzumaki dia ninja tanora manonofy ho lasa Hokage.",
        year: 2002
      },

      {
        id: 2,
        title: "One Piece",
        type: "TV",
        score: 8.7,
        episodes: 1100,
        image: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
        description:
          "Luffy sy ny ekipany dia mitady ny One Piece.",
        year: 1999
      },

      {
        id: 3,
        title: "Bleach",
        type: "TV",
        score: 8.2,
        episodes: 366,
        image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
        description:
          "Ichigo Kurosaki dia mahazo hery Shinigami.",
        year: 2004
      },

      {
        id: 4,
        title: "Demon Slayer",
        type: "TV",
        score: 8.6,
        episodes: 55,
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        description:
          "Tanjiro dia miady amin'ny demonia mba hamonjy ny rahavaviny.",
        year: 2019
      },

      {
        id: 5,
        title: "Jujutsu Kaisen",
        type: "TV",
        score: 8.5,
        episodes: 47,
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        description:
          "Yuji Itadori dia miditra amin'ny tontolon'ny Jujutsu.",
        year: 2020
      },

      {
        id: 6,
        title: "Attack on Titan",
        type: "TV",
        score: 9.1,
        episodes: 89,
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        description:
          "Ny olombelona dia miady amin'ireo Titans goavam-be.",
        year: 2013
      },

      {
        id: 7,
        title: "Dragon Ball",
        type: "TV",
        score: 8.4,
        episodes: 153,
        image: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
        description:
          "Goku dia manomboka ny aventure-ny hitady ireo Dragon Balls.",
        year: 1986
      },

      {
        id: 8,
        title: "Hunter x Hunter",
        type: "TV",
        score: 9.0,
        episodes: 148,
        image: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
        description:
          "Gon dia lasa Hunter mba hitady ny rainy.",
        year: 2011
      },

      {
        id: 9,
        title: "Death Note",
        type: "TV",
        score: 8.6,
        episodes: 37,
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        description:
          "Light Yagami dia mahita boky manana hery mampidi-doza.",
        year: 2006
      },

      {
        id: 10,
        title: "Solo Leveling",
        type: "TV",
        score: 8.8,
        episodes: 25,
        image: "https://cdn.myanimelist.net/images/anime/1809/140227.jpg",
        description:
          "Sung Jin-Woo dia manomboka miakatra amin'ny heriny.",
        year: 2024
      }
    );

    if (typeof afficherAnime === "function") {
      afficherAnime(ANIME_DATA);
    }
  }
}


/*
  Manomboka maka ny anime.
*/
loadAnimeData();
