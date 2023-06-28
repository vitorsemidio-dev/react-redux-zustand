import React, { useState } from 'react';

import { fetchPlaylistVideos } from '../services/youtube-api';

type VideoItem = {
  title: string;
  videoId: string;
  thumbnail: string;
};

interface ModuleHeaderProps {
  amountOfLessons: number;
  index: number;
  title: string;
}

function ModuleHeader({ amountOfLessons, index, title }: ModuleHeaderProps) {
  return (
    <header className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
        {index}
      </div>
      <div className="flex flex-col gap-1 text-left">
        <strong className="text-sm ">{title}</strong>
        <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
      </div>
    </header>
  );
}

export function PlaylistVideos() {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [videos, setVideos] = useState<VideoItem[]>([]);

  const handlePlaylistUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlaylistUrl(event.target.value);
  };

  const handleSearchPlaylist = async () => {
    try {
      const playlistVideos = await fetchPlaylistVideos(playlistUrl);
      setVideos(playlistVideos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <input
          type="text"
          value={playlistUrl}
          onChange={handlePlaylistUrlChange}
          placeholder="Insira a URL da playlist"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-1 bg-transparent text-zinc-50"
        />
        <button
          onClick={handleSearchPlaylist}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Buscar
        </button>
      </div>
      <section className="rounded-lg overflow-hidden">
        <ModuleHeader
          amountOfLessons={videos.length}
          index={1}
          title={'Nova Playlist'}
        />
        <div className="w-full max-h-[600px] bg-zinc-700 overflow-auto p-4 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
          {videos.length === 0 ? (
            <p className="text-zinc-300">
              Nenhum vídeo adicionado. Insira a url da playlist para importar
              vídeos
            </p>
          ) : (
            <ul>
              {videos.map((video) => (
                <li key={video.videoId}>
                  <img src={video.thumbnail} alt={video.title} />
                  <h3>{video.title}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default PlaylistVideos;
