import { ChevronDown, MessageCircle, Video } from 'lucide-react';
import ReactPlayer from 'react-player';

export function Player() {
  const sections = [1, 2, 3]
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="zinc-400 text-sm">Módulo Redux</span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <div>
              <div className="aspect-video w-full bg-zinc-950">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://www.youtube.com/watch?v=4qpgwR6JZPY"
                />
              </div>
            </div>
          </div>
          <aside className="absolute top-0 right-0 bottom-0 w-80 border-l border-zinc-800 bg-zinc-900 divide-y-4 divide-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {sections.map((section) => (
              <div key={section}>
                <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                    {section}
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm ">Descobrindo o Redux</strong>
                    <span className="text-xs text-zinc-400">12 aulas</span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4 text-zinc-400" />
                </button>

                <nav className="relative flex flex-col gap-4 p-6">
                  <button className="flex items-center gap-3 text-sm text-zinc-400">
                    <Video className="h-4 w-4 text-zinc-500" />
                    <span>Fundamentos dos Redux</span>
                    <span className="ml-auto font-mono text-xs text-zinc-500">
                      05:55
                    </span>
                  </button>
                  <button className="flex items-center gap-3 text-sm text-zinc-400">
                    <Video className="h-4 w-4 text-zinc-500" />
                    <span>Fundamentos dos Redux</span>
                    <span className="ml-auto font-mono text-xs text-zinc-500">
                      05:55
                    </span>
                  </button>
                  <button className="flex items-center gap-3 text-sm text-zinc-400">
                    <Video className="h-4 w-4 text-zinc-500" />
                    <span>Fundamentos dos Redux</span>
                    <span className="ml-auto font-mono text-xs text-zinc-500">
                      05:55
                    </span>
                  </button>
                </nav>
              </div>
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
