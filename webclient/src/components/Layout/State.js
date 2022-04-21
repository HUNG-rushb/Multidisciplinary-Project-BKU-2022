import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../../actions/device';
import { Link } from 'react-router-dom';

const State = ({ device: { devices }, fetchData }) => {
  return (
    <div className='state'>
      <h2> State </h2>
      {devices.map((eachDevice) =>
        eachDevice.description === 'temp' ? (
          <Link to='temp' key={eachDevice.device_id}>
            <div key={eachDevice.device_id} className='statement'>
              <div className='temparute'>
                <span className='material-icons-sharp '> thermostat </span>
                <div className='middle'>
                  <div className='left'>
                    <h3> Avg House Temp </h3>
                  </div>
                  <div className='progress'>
                    <div className='text'>
                      <h1> {eachDevice.data[0].value} &deg; C </h1>
                    </div>
                  </div>
                </div>
                <small className='text - muted'>Last 5 Minutes </small>
              </div>
            </div>
          </Link>
        ) : eachDevice.description === 'humi' ? (
          <Link to='humi' key={eachDevice.device_id}>
            <div key={eachDevice.device_id} className='statement'>
              <div className='humidity'>
                <span className='material-icons-sharp'> water_drop </span>
                <div className='middle'>
                  <div className='left'>
                    <h3> Humidity House </h3>
                  </div>
                  <div className='progress'>
                    <div className='text'>
                      <h1> {eachDevice.data[0].value} %</h1>
                    </div>
                  </div>
                </div>
                <small className='text - muted'> Last 5 Minutes </small>
              </div>
            </div>
          </Link>
        ) : eachDevice.description === 'gas' ? (
          <Link to='gas' key={eachDevice.device_id}>
            <div key={eachDevice.device_id} className='statement'>
              <div className='temparute'>
                <span className='material-icons-sharp'>gas_meter</span>
                <div className='middle'>
                  <div className='left'>
                    <h3> Avg House Gas </h3>
                  </div>
                  <div className='progress'>
                    <div className='text'>
                      <h1> {eachDevice.data[0].value} ppm </h1>
                    </div>
                  </div>
                </div>
                <small className='text - muted'>Last 5 Minutes </small>
              </div>
            </div>
          </Link>
        ) : (
          console.log('Nothing')
        )
      )}
    </div>
  );
};

State.propTypes = {
  device: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { fetchData })(State);
