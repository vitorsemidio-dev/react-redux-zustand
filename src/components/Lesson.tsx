import { PlayCircle, Video } from 'lucide-react';

interface LessonProps {
  duration: string;
  isCurrent?: boolean;
  title: string;
  onPlay: () => void;
}

export function Lesson({
  duration,
  isCurrent = false,
  title,
  onPlay,
}: LessonProps) {
  return (
    <button
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
      data-active={isCurrent}
      disabled={isCurrent}
      onClick={onPlay}
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-500" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
