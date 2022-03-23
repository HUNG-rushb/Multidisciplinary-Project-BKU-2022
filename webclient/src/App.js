// import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './store';

import TestDashboard from './components/Test/TestDashboard';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <TestDashboard />
      </div>
    </Provider>
  );
};

export default App;
