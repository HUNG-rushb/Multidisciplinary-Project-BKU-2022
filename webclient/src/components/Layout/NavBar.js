import React from 'react';
import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <aside>
      <div className='top'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <h2>
            Smart <span className='danger '>Home</span>
          </h2>
        </div>
        <div className='close' id='close-btn '>
          <span className='material-icons-sharp '>close</span>
        </div>
      </div>
      <div className='sidebar'>
        <a href='#' className='active'>
          <span className='material-icons-sharp'>home</span>
          <h3>Home</h3>
        </a>
        <a href='#'>
          <span className=' material-icons-sharp '>lightbulb</span>
          <h3>Lights</h3>
        </a>
        <a href='# '>
          <span className='material-icons-sharp '>thermostat</span>
          <h3>Temperature</h3>
        </a>
        <a href='# '>
          <span className='material-icons-sharp '>notifications</span>
          <h3>Alarm</h3>
          <span className='alarm-count'>1</span>
        </a>
        <a href=' # '>
          <span className='material-icons-sharp '>local_fire_department</span>
          <h3>Gas</h3>
        </a>
        <a href='# '>
          <span className='material-icons-sharp '>settings</span>
          <h3>Settings</h3>
        </a>
        <a href='# '>
          <span className='material-icons-sharp '>logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default NavBar;
