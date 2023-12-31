import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';

import { useStore } from '../zustand-store';
import { Lesson } from './Lesson';

interface ModuleProps {
  amountOfLessons: number;
  moduleIndex: number;
  title: string;
}

export function Module({ amountOfLessons, moduleIndex, title }: ModuleProps) {
  const { currentLessonIndex, currentModuleIndex, lessons, play } = useStore(
    (state) => ({
      currentLessonIndex: state.currentLessonIndex,
      currentModuleIndex: state.currentModuleIndex,
      lessons: state.course?.modules[state.currentModuleIndex].lessons,
      play: state.play,
    }),
  );

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm ">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="ml-auto h-4 w-4 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => (
              <Lesson
                key={lesson.id}
                duration={lesson.duration}
                title={lesson.title}
                onPlay={() => play({ moduleIndex, lessonIndex })}
                isCurrent={
                  currentLessonIndex === lessonIndex &&
                  currentModuleIndex === moduleIndex
                }
              />
            ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
