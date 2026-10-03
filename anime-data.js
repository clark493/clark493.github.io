const ANIME_API = "https://api.jikan.moe/v4";

async function getAnimeData() {
  try {
    const response = await fetch(
      `${ANIME_API}/top/anime?limit=24`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const result = await response.json();

    return result.data.map(anime => ({
      id: anime.mal_id,
      title: anime.title,
      titleEnglish: anime.title_english || "",
      image:
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        "",
      score: anime.score ?? "N/A",
      type: anime.type ?? "Anime",
      episodes: anime.episodes ?? "?",
      year: anime.year ?? "N/A",
      status: anime.status ?? "N/A",
      synopsis:
        anime.synopsis || "Aucune description disponible.",
      genres: anime.genres?.map(g => g.name) || []
    }));

  } catch (error) {
    console.error("Erreur chargement Anime :", error);
    return [];
  }
}
