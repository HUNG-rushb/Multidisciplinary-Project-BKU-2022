import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postData } from '../../actions/device';

const DeviceItem = ({ Device, base_value = 0 }) => {
  return (
    <div className='control'>
      <span className=' material-icons-sharp '>lightbulb</span>
      <h2>{Device.name}</h2>
      <div
        className='turn-on-off'
        onClick={() => postData(Device.device_id, 12)}
      >
        {Device.data.length !== 0 && Device.data[0].value === '1' ? (
          <Fragment>
            <h5 className='active'>On</h5>
            <h5>Off</h5>
          </Fragment>
        ) : (
          <Fragment>
            <h5>On</h5>
            <h5 className='active'>Off</h5>
          </Fragment>
        )}
      </div>
    </div>
  );
};

DeviceItem.propTypes = {};

export default DeviceItem;
