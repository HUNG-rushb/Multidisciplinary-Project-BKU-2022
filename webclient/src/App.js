// import NavBar from './components/NavBar/NavBar';
import { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { loadDevices } from './actions/device';
import { loadRooms } from './actions/room';
import { loadTypes } from './actions/type';

import Home from './components/Layout/Home';
import NavBar from './components/Layout/NavBar';

import { SocketContext, socket } from './socket';

import './App.css';

const App = () => {
  useEffect(() => {
    // const interval = setInterval(() => {
    store.dispatch(loadDevices());
    store.dispatch(loadRooms());
    store.dispatch(loadTypes());
    //     }, 1000);
    //
    //     return () => clearInterval(interval);
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <Router>
          <div className='container-fluid '>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </SocketContext.Provider>
  );
};

export default App;
