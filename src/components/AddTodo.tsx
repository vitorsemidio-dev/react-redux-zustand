import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { add } from '../store';

export function AddTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    dispatch(add({ newTodo }));
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
