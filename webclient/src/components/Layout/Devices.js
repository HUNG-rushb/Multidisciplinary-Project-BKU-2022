import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateStatus } from '../../actions/device';

const Devices = ({ device: { devices }, updateStatus }) => {
  return (
    <div className='control-device'>
      <h2>Devices</h2>
      <div className='controls'>
        {devices.map((eachDevice) => (
          <div key={eachDevice.device_id} className='control'>
            <span className=' material-icons-sharp '>lightbulb</span>
            <h2>{eachDevice.name}</h2>
            <div
              className='turn-on-off'
              onClick={() => updateStatus(eachDevice.device_id)}
            >
              <h5 className='active'>On</h5>
              <h5>Off</h5>
            </div>
          </div>
        ))}
        {/* <div className='control'>
          <span className=' material-icons-sharp '>lightbulb</span>
          <h2>Light 1</h2>
          <div className='turn-on-off'>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </div>
        </div>
        <div className='control'>
          <span className=' material-icons-sharp '>lightbulb</span>
          <h2>Light 2</h2>
          <div className='turn-on-off'>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </div>
        </div>
        <div className='control'>
          <span className='material-icons-sharp'>ac_unit</span>
          <h2>AC 1</h2>
          <div className='turn-on-off'>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </div>
        </div>
        <div className='control'>
          <span className='material-icons-sharp'>ac_unit</span>
          <h2>AC 2</h2>
          <div className='turn-on-off'>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </div>
        </div>
        <div className='control'>
          <span className='material-icons-sharp'>wind_power</span>
          <h2>Fan</h2>
          <div className='turn-on-off'>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </div>
        </div> */}
      </div>
    </div>
  );
};

Devices.propTypes = {
  device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { updateStatus })(Devices);
