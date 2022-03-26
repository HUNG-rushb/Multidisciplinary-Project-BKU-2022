// import NavBar from './components/NavBar/NavBar';
import { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { loadDevices } from './actions/device';
import { loadRooms } from './actions/room';
import { loadTypes } from './actions/type';
import TestDashboard from './components/Test/TestDashboard';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadDevices());
    store.dispatch(loadRooms());
    store.dispatch(loadTypes());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        {/* <TestDashboard /> */}
        <Home />
      </Fragment>
    </Provider>
  );
};

export default App;
