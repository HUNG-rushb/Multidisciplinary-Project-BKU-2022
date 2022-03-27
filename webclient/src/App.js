// import NavBar from './components/NavBar/NavBar';
import { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { loadDevices } from './actions/device';
import { loadRooms } from './actions/room';
import { loadTypes } from './actions/type';

import Home from './components/Layout/Home';
import TestDashboard from './components/Test/TestDashboard';
import NavBar from './components/Layout/NavBar';

import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadDevices());
    store.dispatch(loadRooms());
    store.dispatch(loadTypes());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className='container '>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
