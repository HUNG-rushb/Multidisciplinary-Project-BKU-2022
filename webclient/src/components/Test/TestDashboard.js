import React, { useState, useEffect, useRef } from 'react';
import URLs from '../../URLs';
import io from 'socket.io-client';
import axios from 'axios';

const TestDashboard = () => {
  const currentRef = useRef([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connectSocket = async () => {
    const socket = io(`${URLs.socketURL}/socket`);

    socket.on('newTest', (device) => {
      currentRef.device = device;
      console.log(currentRef);
    });
    socket.on('updateTest', (updateData) => {
      currentRef.updateData = updateData;
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
        currentRef.current = response.data;
        console.log(currentRef);
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
    connectSocket();
  }, [connectSocket]);
  return (
    <div>
      {/* {test.data.map((each, key) => {
        return <p key={key}>{each.value}</p>;
      })} */}
    </div>
  );
};

export default TestDashboard;
