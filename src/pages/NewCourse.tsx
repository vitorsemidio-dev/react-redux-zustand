import PlaylistVideos from '../components/PlaylistVideo';

export function NewCourse() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex flex-col max-w-[1100px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-2xl font-bold mb-4">Adicionar novo curso</h1>
        <PlaylistVideos />
      </div>
    </div>
  );
}
