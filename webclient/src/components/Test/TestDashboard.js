import React, { useEffect, useRef } from 'react';
import URLs from '../../URLs';
import io from 'socket.io-client';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadDevices } from '../../actions/device';
import { loadRooms } from '../../actions/room';
import { loadTypes } from '../../actions/type';

const TestDashboard = ({
  device: { devices },
  room: { rooms },
  type_device: { types },
}) => {
  const currentRef = useRef([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connectSocket = async () => {
    await fetchThoughts();
  };

  const fetchThoughts = async () => {
    try {
      const response = await axios.get(`${URLs.baseURL}/devices`);
      if (response.data) {
        currentRef.current = response.data;
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log('Error with fetching thoughts: ', error);
      alert(
        'Error with fetching thought. Please check the console for more info.'
      );
    }
  };

  useEffect(() => {
    connectSocket();
  }, [connectSocket]);
  return <div>{currentRef}</div>;
};

TestDashboard.propTypes = {
  device: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  type_device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
  room: state.room,
  type_device: state.type_device,
});

export default connect(mapStateToProps, {})(TestDashboard);
