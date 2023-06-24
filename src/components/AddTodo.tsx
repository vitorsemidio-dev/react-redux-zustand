import { useState } from 'react';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
