import { useSelector } from 'react-redux';

export function TodoList() {
  const todoStore = useSelector((store: any) => store.todo);
  return (
    <ul>
      {todoStore.map((todo: any) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
