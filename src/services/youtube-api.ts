import axios from "axios";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchPlaylistVideos(playlistUrl: string) {
  const playlistId = extractPlaylistId(playlistUrl);

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}&maxResults=100`
    );

    const videos = response.data.items.map((item: any) => {
      return {
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });

    return videos;
  } catch (error) {
    console.error("Erro ao buscar a lista de vídeos:", error);
  }
}

export function extractPlaylistId(playlistUrl: string) {
  const regex = /[&?]list=([^&]+)/;
  const match = playlistUrl.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error("URL da playlist inválida");
  }
}
