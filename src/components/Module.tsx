import { ChevronDown } from "lucide-react";

import { Lesson } from "./Lesson";

interface ModuleProps {
  amountOfLessons: number;
  moduleIndex: number;
  title: string;
}

export function Module({ amountOfLessons, moduleIndex, title }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm ">
            {title}
          </strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} aulas
          </span>
        </div>
        <ChevronDown className="ml-auto h-4 w-4 text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="5:06" />
        <Lesson title="Fundamentos do Redux" duration="5:06" />
        <Lesson title="Fundamentos do Redux" duration="5:06" />
      </nav>
    </div>
  );
}