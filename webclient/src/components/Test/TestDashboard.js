import React, { useState, useEffect } from 'react';
import URLs from '../../URLs';
import io from 'socket.io-client';
import axios from 'axios';

const TestDashboard = () => {
  const [test, setTest] = useState({
    tests: [],
    name: '',
    description: '',
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connectSocket = async () => {
    const socket = io(`${URLs.socketURL}/socket`);

    socket.on('newTest', (data) => {
      setTest({ tests: [...test.tests, data] });
      console.log(test);
    });

    socket.on('deletedTest', (id) => {
      const updatedTest = test.tests.filter((data) => {
        return data._id !== id;
      });

      setTest({ tests: updatedTest });
      console.log(test);
    });

    socket.on('thoughtsCleared', () => {
      setTest({ tests: [] });
    });

    await fetchThoughts();
  };

  const fetchThoughts = async () => {
    try {
      const response = await axios.get(`${URLs.baseURL}/getTest`);

      if (response.data.success) {
        // console.log(test);
        // console.log(response.data.message);
        // console.log(test.tests);
        // console.log(response.data.message === test.tests);
        if (
          JSON.stringify(response.data.message) !== JSON.stringify(test.tests)
        ) {
          setTest({ tests: response.data.message });
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
      {test.tests.map((each) => {
        return <p>{each.name}</p>;
      })}
    </div>
  );
};

export default TestDashboard;
