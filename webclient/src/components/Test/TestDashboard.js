import React, { useState, useEffect, useRef } from 'react';
import URLs from '../../URLs';
import io from 'socket.io-client';
import axios from 'axios';

const TestDashboard = () => {
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

export default TestDashboard;
