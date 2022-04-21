import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = ({ device: { devices, loading }, types }) => {
  let ChartData;
  let HumiData;
  let TimeData;
  if (loading === false) {
    ChartData = devices.filter((eachDevice) => {
      return eachDevice.name === types;
    });

    HumiData = devices
      .find(({ name }) => name === types)
      .data.map(({ value }) => value)
      .reverse();

    TimeData = devices
      .find(({ name }) => name === types)
      .data.map(({ created_at }) => created_at.substring(11, 19))
      .reverse();
  }
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${types} Line Chart`,
      },
    },
    options: {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'hour',
              displayFormats: {
                hour: 'HH:mm:ss',
              },
            },
          },
        ],
      },
    },
  };

  const labels = TimeData;

  const data = {
    labels,
    datasets: [
      {
        label: types === 'Humi' ? '%' : types === 'Gas' ? 'ppm' : '&deg; C',
        data: HumiData,
        borderColor:
          types === 'Humi'
            ? 'rgb(255, 99, 132)'
            : types === 'Gas'
            ? 'rgb(75, 192, 192)'
            : 'rgb(255, 199, 67)',
        backgroundColor:
          types === 'Humi'
            ? 'rgb(255, 99, 132)'
            : types === 'Gas'
            ? 'rgb(75, 192, 192)'
            : 'rgb(255, 199, 67)',
      },
    ],
  };

  return (
    <div>
      {ChartData ? (
        <Line options={options} data={data} />
      ) : (
        console.log('Nothing')
      )}
    </div>
  );
};

Statistics.propTypes = {
  device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});
export default connect(mapStateToProps, {})(Statistics);
