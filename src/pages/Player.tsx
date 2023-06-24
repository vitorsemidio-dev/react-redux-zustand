import { MessageCircle } from "lucide-react";

import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { Video } from "../components/Video";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector(state => state.player.course.modules)

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="absolute top-0 right-0 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 divide-y-4 divide-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module, index) => (
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
