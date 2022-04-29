import React from 'react';

const Warning = () => {
  return (
    <div className='warning'>
      <h2>Warning</h2>
      <div className='item'>
        <div className='icon'>
          <span className='material-icons-sharp'>local_fire_department</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>Gas warning</h3>
            <small className='text-muted'>Last 5 minutes</small>
          </div>
          <div className='icon-warn'>
            <span className='material-icons-sharp'>warning</span>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='icon'>
          <span className='material-icons-sharp '>notifications</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>Alarm warning</h3>
            <small className='text-muted'>Last 5 minutes</small>
          </div>
          <div className='icon-warn'>
            <span className='material-icons-sharp'>volume_up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
