import React, { Fragment } from 'react';
import profile from '../../images/profile.png';
import DeviceForm from '../Devices/DeviceForm';
import Warning from './Warning';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
  return (
    <Fragment>
      <Dashboard />
      <div className='right'>
        <div className='top'>
          <button id='menu-btn'>
            <span className='material-icons-sharp'>menu</span>
          </button>
          <div className='wifi'>
            <span className='material-icons-sharp'>wifi</span>
          </div>
          <p>Connected</p>
          <div className='profile'>
            <div className='info'>
              <p>
                Hey, <b>Name</b>
              </p>
              <small className='text-muted'>Admin</small>
            </div>
            <div className='profile-photo'>
              <img src={profile} alt='profile' />
            </div>
          </div>
        </div>
        <DeviceForm />
        <Warning />
      </div>
    </Fragment>
  );
};

export default Home;
