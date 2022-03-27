import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postData } from '../../actions/device';
import DeviceItem from './DeviceItem';

const DeviceForm = ({ device: { devices }, updateStatus }) => {
  return (
    <div className='control-device'>
      <h2>Devices</h2>
      <div className='controls'>
        {devices.map((eachDevice) => (
          <DeviceItem key={eachDevice.device_id} Device={eachDevice} />
        ))}
      </div>
    </div>
  );
};

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { postData })(DeviceForm);
