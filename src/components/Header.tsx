import { useAppSelector } from '../store';
import { useCurrentLesson } from '../store/slices/player';

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson();
  const isLoading = useAppSelector((state) => state.player.isLoading);

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-zinc-400 text-sm">
        Módulo: {currentModule?.title}
      </span>
    </div>
  );
}
