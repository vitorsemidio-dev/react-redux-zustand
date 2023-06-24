import { useSelectorApp } from '../store';

export function TodoList() {
  const todoStore = useSelectorApp((store) => store.todo);

  return (
    <ul>
      {todoStore.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
