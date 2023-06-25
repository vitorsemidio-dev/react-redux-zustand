import ReactPlayer from 'react-player';

import { Loader } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { next, useCurrentLesson } from '../store/slices/player';

export function Video() {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();
  const isLoading = useAppSelector((state) => state.player.isLoading);

  function handlePlayNext() {
    dispatch(next());
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
