import React, { useRef, useState, useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Insights from './Insights';
import Rooms from './Rooms';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      setCurrentDate(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      <div className='date'>
        <Moment date={currentDate} format='YYYY/MM/DD hh:mm:ss'></Moment>
      </div>
      <Insights />
      <Rooms />
    </main>
  );
};

export default Dashboard;
