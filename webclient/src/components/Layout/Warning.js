import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Warning = ({ device: { devices, loading }, types = 'Gas' }) => {
  let GasDevice;
  let GasData;
  if (loading === false) {
    GasDevice = devices.filter((eachDevice) => {
      return eachDevice.name === types;
    });

    GasData = devices
      .find(({ name }) => name === types)
      .data.map(({ value }) => value)
      .reverse();
  }

  return (
    <div className='warning'>
      <h2>Warning</h2>
      {loading === false && GasDevice && GasData >= '300' ? (
        <div className='item'>
          <div className='icon'>
            <span className='material-icons-sharp'>local_fire_department</span>
          </div>
          <div className='right'>
            <div className='info'>
              <h3>Gas warning</h3>
              <small className='text-muted'>Last 5 minutes</small>
            </div>
            <div className='icon-warn'>
              <span className='material-icons-sharp'>warning</span>
            </div>
          </div>
        </div>
      ) : (
        console.log('Nothing')
      )}
    </div>
  );
};

Warning.propTypes = {
  device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});
export default connect(mapStateToProps, {})(Warning);
