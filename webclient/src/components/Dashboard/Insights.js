import React from 'react';

const Insights = () => {
  return (
    <div className='insights'>
      <div className='temparute'>
        <span className='material-icons-sharp '>thermostat</span>
        <div className='middle'>
          <div className='left'>
            <h3>Avg House Temp</h3>
          </div>
          <div className='progress'>
            <div className='text'>
              <h1>25 &deg;C</h1>
            </div>
          </div>
        </div>
        <small className=''>Last 5 Minutes</small>
      </div>

      <div className='humidity'>
        <span className='material-icons-sharp'>water_drop</span>
        <div className='middle'>
          <div className='left'>
            <h3>Humidity House</h3>
          </div>
          <div className='progress'>
            <div className='text'>
              <h1>60%</h1>
            </div>
          </div>
        </div>
        <small className=''>Last 5 Minutes</small>
      </div>

      <div className='device'>
        <span className=' material-icons-sharp '>lightbulb</span>
        <div className='middle'>
          <div className='left'>
            <h3>0/5</h3>
          </div>
          <div className='progress'>
            <div className='text'>
              <h1>25 &deg;C</h1>
            </div>
          </div>
        </div>
        <small className=''>Last 5 Minutes</small>
      </div>
    </div>
  );
};

export default Insights;
