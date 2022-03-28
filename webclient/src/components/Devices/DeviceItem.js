import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postData } from '../../actions/device';
import PropTypes from 'prop-types';

const DeviceItem = ({ eachDevice, base_value = 0, postData }) => {
  const [Device, setDevice] = useState(eachDevice);

  useEffect(() => {
    if (eachDevice !== Device) {
      setDevice(eachDevice);
    }
  }, [eachDevice, Device]);

  return (
    <div className='control'>
      <span className=' material-icons-sharp '>lightbulb</span>
      <h2>{Device.name}</h2>
      <div
        className='turn-on-off'
        onClick={() => postData(Device.device_id, 1)}
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

DeviceItem.propTypes = {
  postData: PropTypes.func.isRequired,
};

export default connect(null, { postData })(DeviceItem);
