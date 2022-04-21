import React from 'react';
import { loadDevicesByFilter } from '../../actions/device';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Insights = ({ loadDevicesByFilter }) => {
  return (
    <div className='insights'>
      <div className='livingroom' onClick={(e) => loadDevicesByFilter()}>
        <div className='middle'>
          <div className='center'>
            <h3> Living room </h3>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className='kitchen' onClick={(e) => loadDevicesByFilter('532752')}>
        <div className='middle'>
          <div className='center'>
            <h3> Kitchen </h3>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className='bedroom' onClick={(e) => loadDevicesByFilter('532750')}>
        <div className='middle'>
          <div className='center'>
            <h3> Bedroom </h3>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className='bathroom' onClick={(e) => loadDevicesByFilter('532751')}>
        <div className='middle'>
          <div className='center'>
            <h3> Bathroom </h3>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className='all' onClick={(e) => loadDevicesByFilter()}>
        <div className='middle'>
          <div className='center'>
            <h3> All </h3>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

Insights.propTypes = {
  loadDevicesByFilter: PropTypes.func.isRequired,
};

export default connect(null, { loadDevicesByFilter })(Insights);
