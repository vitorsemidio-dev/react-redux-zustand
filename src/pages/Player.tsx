import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

import { Header } from '../components/Header';
import { Module } from '../components/Module';
import { Video } from '../components/Video';
import { fetchPlaylistVideos } from '../services/youtube-api';
import { useCurrentLesson, useStore } from '../zustand-store';

export function Player() {
  const { course, load } = useStore((state) => ({
    course: state.course,
    load: state.load,
  }));
  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    if (!currentLesson) return;
    document.title = `Assistindo: ${currentLesson.title}`;
  }, [currentLesson]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    const loadPlaylist = async () => {
      const playlistUrl =
        'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f';
      const response = await fetchPlaylistVideos(playlistUrl);
      console.log(response);
    };
    loadPlaylist();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 ml-auto rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="absolute top-0 right-0 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 divide-y-4 divide-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules &&
              course?.modules.map((module, index) => (
                <Module
                  key={module.id}
                  amountOfLessons={module.lessons.length}
                  moduleIndex={index}
                  title={module.title}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
