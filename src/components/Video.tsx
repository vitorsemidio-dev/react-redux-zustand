import { Loader } from 'lucide-react';
import ReactPlayer from 'react-player';

import { useCurrentLesson, useStore } from '../zustand-store';

export function Video() {
  const { isLoading, next } = useStore((state) => ({
    isLoading: state.isLoading,
    next: state.next,
  }));
  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    next();
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-8 h-8 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
