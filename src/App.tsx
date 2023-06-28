import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';

// import { Player } from './pages/Player';
import { NewCourse } from './pages/NewCourse';

function App() {
  return (
    <ReduxProvider store={store}>
      {/* <Player /> */}
      <NewCourse />
    </ReduxProvider>
  );
}

export default App;
