import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../../actions/device';
import { SocketContext } from '../../socket';
import DeviceItem from './DeviceItem';

const DeviceForm = ({ device: { devices }, fetchData }) => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on('newDevice', (device) => {});

    socket.on('updateDevice', (ObjectId, updateDevice) => {
      const UpdatedDevice = {
        device_id: ObjectId,
        device_data: updateDevice,
      };
      fetchData(UpdatedDevice);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  return (
    <div className='control-device'>
      <h2>Devices</h2>
      <div className='controls'>
        {devices.map((eachDevice) => (
          <DeviceItem key={eachDevice.device_id} eachDevice={eachDevice} />
        ))}
      </div>
    </div>
  );
};

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { fetchData })(DeviceForm);
