// import NavBar from './components/NavBar/NavBar';
import { useEffect, Fragment, useState } from 'react';
import { Provider } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';

import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { loadDevices } from './actions/device';
import { loadRooms } from './actions/room';
import { loadTypes } from './actions/type';

import NavBar from './components/Layout/NavBar';
import Statistics from './components/Statistics/Statistics';
import profile from './images/profile.png';
import State from './components/Layout/State';
import Warning from './components/Layout/Warning';

import Insights from './components/Dashboard/Insights';
import Rooms from './components/Dashboard/Rooms';
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

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      setCurrentDate(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <Router>
          <div className='container-fluid'>
            <NavBar />
            <Fragment>
              <main>
                <h1>Dashboard</h1>
                <div className='date'>
                  <Moment
                    date={currentDate}
                    format='YYYY/MM/DD hh:mm:ss'
                  ></Moment>
                </div>
                <Routes>
                  <Route
                    path='/'
                    element={
                      <Fragment>
                        <Insights />
                        <Rooms />
                      </Fragment>
                    }
                  />
                  <Route path='/humi' element={<Statistics types={'Humi'} />} />
                  <Route path='/gas' element={<Statistics types={'Gas'} />} />
                  <Route path='/temp' element={<Statistics types={'Temp'} />} />
                </Routes>
              </main>
              <div className='right'>
                <div className='top'>
                  <button id='menu-btn'>
                    <span className='material-icons-sharp'> menu </span>{' '}
                  </button>{' '}
                  <div className='wifi'>
                    <span className='material-icons-sharp'> wifi </span>{' '}
                  </div>{' '}
                  <p> Connected </p>{' '}
                  <div className='profile'>
                    <div className='info'>
                      <p>
                        Hey, <b> Name </b>{' '}
                      </p>{' '}
                      <small className='text-muted'> Admin </small>{' '}
                    </div>{' '}
                    <div className='profile-photo'>
                      <img src={profile} alt='profile' />
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <State />
                <Warning />
              </div>{' '}
            </Fragment>
          </div>
        </Router>
      </Provider>
    </SocketContext.Provider>
  );
};

export default App;
