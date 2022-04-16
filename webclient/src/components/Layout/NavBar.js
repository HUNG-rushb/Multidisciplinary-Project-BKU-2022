import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { fetchData } from '../../actions/device';
import { postData } from '../../actions/device';

const NavBar = ({ device: { device, loading }, fetchData, postData }) => {
  const changeData = (device_id, device_value) => {
    if (device_id === '1859634') {
      if (device_value === '53') {
        postData(device_id, 47);
      } else {
        postData(device_id, 53);
      }
    }
  };

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
        <NavLink
          to=''
          className={(navData) => (navData.isActive ? 'active' : '')}
        >
          <span className='material-icons-sharp'>home</span>
          <h3>Home</h3>
        </NavLink>
        <NavLink
          to='humi'
          className={(navData) => (navData.isActive ? 'active' : '')}
        >
          <span className='material-icons-sharp'> water_drop </span>
          <h3>Humidity</h3>
        </NavLink>
        <NavLink
          to='gas'
          className={(navData) => (navData.isActive ? 'active' : '')}
        >
          <span className='material-icons-sharp'>gas_meter</span>
          <h3>Gas</h3>
        </NavLink>
        <NavLink
          to='temp'
          className={(navData) => (navData.isActive ? 'active' : '')}
        >
          <span className='material-icons-sharp '>thermostat</span>
          <h3>Temperature</h3>
        </NavLink>
        {loading === false && device !== null ? (
          device.data.length !== 0 && device.data[0].value === '53' ? (
            <div key={device.device_id}>
              <span className='material-icons-sharp '>smart_toy</span>
              <h3>
                <div className='control'>
                  <div
                    onClick={() =>
                      changeData(device.device_id, device.data[0].value)
                    }
                    className='turn-on-off'
                  >
                    <h5 className='active'>On</h5>
                    <h5>Off</h5>
                  </div>
                </div>
              </h3>
            </div>
          ) : (
            <div key={device.device_id}>
              <span className='material-icons-sharp '>smart_toy</span>
              <h3>
                <div className='control'>
                  <div
                    onClick={() =>
                      changeData(device.device_id, device.data[0].value)
                    }
                    className='turn-on-off'
                  >
                    <h5>On</h5>
                    <h5 className='active'>Off</h5>
                  </div>
                </div>
              </h3>
            </div>
          )
        ) : (
          console.log('Nothing')
        )}
        <Link to=''>
          <span className='material-icons-sharp '>logout</span>
          <h3>Logout</h3>
        </Link>
      </div>
    </aside>
  );
};

NavBar.propTypes = {
  device: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  postData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { fetchData, postData })(NavBar);
