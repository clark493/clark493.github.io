const ANIME_DATA = [];

/*
  AnimeZone
  Maka automatique ny anime sy ny sary avy amin'ny Jikan API
*/

const ANIME_API = "https://api.jikan.moe/v4";

async function loadAnimeData() {
  try {
    const response = await fetch(
      `${ANIME_API}/top/anime?limit=24`
    );

    if (!response.ok) {
      throw new Error("Tsy afaka naka ny anime.");
    }

    const result = await response.json();

    const animeList = result.data.map((anime, index) => ({
      id: anime.mal_id || index + 1,

      title:
        anime.title ||
        anime.title_english ||
        "Anime tsy fantatra",

      titleEnglish:
        anime.title_english || "",

      type:
        anime.type || "TV",

      score:
        anime.score ?? "N/A",

      episodes:
        anime.episodes || 0,

      image:
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        anime.images?.webp?.large_image_url ||
        "",

      description:
        anime.synopsis ||
        "Tsy mbola misy description.",

      year:
        anime.year ||
        anime.aired?.prop?.from?.year ||
        "N/A"
    }));

    /*
      Fenoy ny ANIME_DATA
    */
    ANIME_DATA.push(...animeList);

    /*
      Asehoy rehefa vita ny téléchargement
    */
    if (typeof afficherAnime === "function") {
      afficherAnime(ANIME_DATA);
    }

    console.log(
      "AnimeZone: anime chargés :",
      ANIME_DATA.length
    );

  } catch (error) {
    console.error(
      "Erreur AnimeZone :",
      error
    );

    /*
      Raha tsy mandeha ny API,
      dia mbola misy anime de secours.
    */

    const fallbackAnime = [
      {
        id: 1,
        title: "Naruto",
        type: "TV",
        score: 8.4,
        episodes: 220,
        image:
          "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
        description:
          "Naruto Uzumaki dia ninja tanora manonofy ho Hokage.",
        year: 2002
      },

      {
        id: 2,
        title: "One Piece",
        type: "TV",
        score: 8.7,
        episodes: 1100,
        image:
          "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
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
        image:
          "https://cdn.myanimelist.net/images/anime/3/40451l.jpg",
        description:
          "Ichigo Kurosaki dia lasa Soul Reaper.",
        year: 2004
      },

      {
        id: 4,
        title: "Demon Slayer",
        type: "TV",
        score: 8.6,
        episodes: 55,
        image:
          "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
        description:
          "Tanjiro dia mitady fomba hamerenana ny anabaviny ho olombelona.",
        year: 2019
      },

      {
        id: 5,
        title: "Jujutsu Kaisen",
        type: "TV",
        score: 8.5,
        episodes: 47,
        image:
          "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
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
        image:
          "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
        description:
          "Eren sy ny namany miady amin'ireo Titans.",
        year: 2013
      },

      {
        id: 7,
        title: "Dragon Ball",
        type: "TV",
        score: 8.4,
        episodes: 153,
        image:
          "https://cdn.myanimelist.net/images/anime/1887/92364l.jpg",
        description:
          "Goku dia manomboka ny diany mitady ny Dragon Balls.",
        year: 1986
      },

      {
        id: 8,
        title: "Black Clover",
        type: "TV",
        score: 8.1,
        episodes: 170,
        image:
          "https://cdn.myanimelist.net/images/anime/2/88336l.jpg",
        description:
          "Asta dia maniry ho Wizard King na dia tsy manana magic aza.",
        year: 2017
      },

      {
        id: 9,
        title: "Hunter x Hunter",
        type: "TV",
        score: 9.0,
        episodes: 148,
        image:
          "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
        description:
          "Gon dia mandeha mitady ny rainy ary lasa Hunter.",
        year: 2011
      },

      {
        id: 10,
        title: "Death Note",
        type: "TV",
        score: 8.6,
        episodes: 37,
        image:
          "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
        description:
          "Light Yagami dia mahita boky mistery afaka mamono olona.",
        year: 2006
      },

      {
        id: 11,
        title: "Solo Leveling",
        type: "TV",
        score: 8.8,
        episodes: 25,
        image:
          "https://cdn.myanimelist.net/images/anime/1809/140748l.jpg",
        description:
          "Sung Jin-Woo dia manomboka miakatra hery amin'ny fomba miavaka.",
        year: 2024
      }
    ];

    ANIME_DATA.push(...fallbackAnime);

    if (typeof afficherAnime === "function") {
      afficherAnime(ANIME_DATA);
    }
  }
}


/*
  Atombohy ny chargement
*/
loadAnimeData();
