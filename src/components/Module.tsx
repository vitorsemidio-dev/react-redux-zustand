import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useDispatch } from 'react-redux';

import { useAppSelector } from "../store";
import { play } from "../store/slices/player";
import { Lesson } from "./Lesson";

interface ModuleProps {
  amountOfLessons: number;
  moduleIndex: number;
  title: string;
}

export function Module({ amountOfLessons, moduleIndex, title }: ModuleProps) {
  const lessons = useAppSelector(state => state.player.course?.modules[moduleIndex].lessons);
  const { currentLessonIndex, currentModuleIndex } = useAppSelector(state => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    return { currentLessonIndex, currentModuleIndex }
  });

  const dispatch = useDispatch();

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
          {lessons && lessons.map((lesson, lessonIndex) => (
            <Lesson
              key={lesson.id}
              duration={lesson.duration}
              title={lesson.title}
              onPlay={() => dispatch(play({ moduleIndex, lessonIndex }))}
              isCurrent={currentLessonIndex === lessonIndex && currentModuleIndex === moduleIndex}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
