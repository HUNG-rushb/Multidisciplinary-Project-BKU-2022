import React, { useState, useEffect } from 'react';
import URLs from '../../URLs';
import io from 'socket.io-client';
import axios from 'axios';

const TestDashboard = () => {
  const [test, setTest] = useState({
    key: '',
    name: '',
    description: '',
    data: [],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connectSocket = async () => {
    const socket = io(`${URLs.socketURL}/socket`);

    socket.on('newTest', (device) => {
      setTest({
        data: device.data,
        key: device.key,
        name: device.name,
        description: device.description,
      });
      console.log(test);
    });
    socket.on('updateTest', (updateData) => {
      console.log(updateData);
      setTest({
        data: updateData,
        ...test,
      });
      console.log(test);
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
      const response = await axios.get(`${URLs.baseURL}/getDevices`);

      if (response.data.success) {
        // get first device
        const device = response.data.message[0];
        if (JSON.stringify(device) !== JSON.stringify(test)) {
          setTest({
            key: device.key,
            name: device.name,
            description: device.description,
            data: device.data,
          });
          console.log(test);
        }
      } else {
        alert(response.data.message);
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
      {test.data.map((each, key) => {
        return <p key={key}>{each.value}</p>;
      })}
    </div>
  );
};

export default TestDashboard;
