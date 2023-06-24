import { Provider as ReduxProvider } from 'react-redux';

import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { store } from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <AddTodo />
      <TodoList />
    </ReduxProvider>
  );
}

export default App;
