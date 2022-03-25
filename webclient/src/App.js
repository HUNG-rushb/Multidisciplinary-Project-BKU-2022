// import NavBar from './components/NavBar/NavBar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { loadDevices } from './actions/device';
import { loadRooms } from './actions/room';
import { loadTypes } from './actions/type';
import TestDashboard from './components/Test/TestDashboard';

const App = () => {
  useEffect(() => {
    store.dispatch(loadDevices());
    store.dispatch(loadRooms());
    store.dispatch(loadTypes());
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <TestDashboard />
      </div>
    </Provider>
  );
};

export default App;
