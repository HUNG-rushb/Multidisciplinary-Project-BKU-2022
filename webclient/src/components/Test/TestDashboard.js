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
    const socket = io(`${URLs.socketURL}/socket`);

    socket.on('newDevice', (device) => {
      currentRef.currentRef = device;
      console.log(currentRef);
    });
    socket.on('updateDevice', (updateData) => {
      console.log(updateData);
      // currentRef.currentRef = updateData;
      console.log(currentRef);
    });

    //     socket.on('deletedTest', (id) => {
    //       const updatedTest = test.data.filter((data) => {
    //         return data._id !== id;
    //       });
    //
    //       setTest({ data: updatedTest });
    //       console.log(test);
    //     });

    // socket.on('thoughtsCleared', () => {
    //   setTest({ data: [] });
    // });

    await fetchThoughts();
  };

  const fetchThoughts = async () => {
    try {
      const response = await axios.get(`${URLs.baseURL}/devices`);
      if (response.data) {
        // get first device
        // currentRef.current = response.data;
        // console.log(currentRef.current[0].data);
        // if (JSON.stringify(device) !== JSON.stringify(test)) {
        //   setTest({
        //     key: device.key,
        //     name: device.name,
        //     description: device.description,
        //     data: device.data,
        //   });
        //   console.log(test);
        // }
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
    // connectSocket();
    loadDevices();
    loadRooms();
    loadTypes();
  }, []);
  return (
    <div>
      {/* {currentRef.current[0].data.map((each, index) => {
        return <p key={index}>{each.value}</p>;
      })} */}
      {devices.map((each) => {
        return <p>{each.name}</p>;
      })}
      {rooms.map((each) => {
        return <p>{each.name}</p>;
      })}
      {types.map((each) => {
        return <p>{each.name}</p>;
      })}
    </div>
  );
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
