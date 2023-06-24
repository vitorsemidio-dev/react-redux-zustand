interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ subtitle, title }: HeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="zinc-400 text-sm">{subtitle}</span>
    </div>
  );
}
