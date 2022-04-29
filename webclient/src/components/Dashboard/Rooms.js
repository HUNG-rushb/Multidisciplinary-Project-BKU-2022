import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, fetchBot, postData } from '../../actions/device';
import { SocketContext } from '../../socket';
import '../../bootstrap.min.css';

const Rooms = ({ device: { devices }, fetchData, fetchBot, postData }) => {
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on('updateDevice', (ObjectId, updateDevice) => {
      const UpdatedDevice = {
        device_id: ObjectId,
        device_data: updateDevice,
      };
      console.log(UpdatedDevice);
      if (UpdatedDevice.device_id === '1859634') {
        fetchBot(UpdatedDevice);
      } else {
        fetchData(UpdatedDevice);
      }
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  const changeData = (device_id, device_value) => {
    if (device_id === '1858276') {
      if (device_value === '55') {
        postData(device_id, 45);
      } else {
        postData(device_id, 55);
      }
    } else if (device_id === '1858273') {
      if (device_value === '54') {
        postData(device_id, 46);
      } else {
        postData(device_id, 54);
      }
    } else if (device_id === '1858277') {
      console.log(device_value);
      postData(device_id, device_value);
    }
  };

  return (
    <div className='rooms'>
      <h2>Rooms/Devices On</h2>
      {/* <div className='row'>
        <div className='col-4'>
          <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='col-8 d-flex flex-row-reverse'>
          <ButtonGroup aria-label='Basic example'>
            <Button variant='secondary'>Left</Button>
            <Button variant='secondary'>Middle</Button>
            <Button variant='secondary'>Right</Button>
          </ButtonGroup>
        </div>
      </div> */}
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Devices</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(
            (eachDevice) =>
              (eachDevice.description === 'light' ||
                eachDevice.description === 'fan') &&
              (eachDevice.device_id === '1858276' ? (
                eachDevice.data.length !== 0 &&
                eachDevice.data[0].value === '55' ? (
                  <Fragment key={eachDevice.device_id}>
                    <tr>
                      <td>{eachDevice.name}</td>
                      <td>
                        <div className='control'>
                          <div
                            onClick={() =>
                              changeData(
                                eachDevice.device_id,
                                eachDevice.data[0].value
                              )
                            }
                            className='turn-on-off'
                          >
                            <h5 className='active'>On</h5>
                            <h5>Off</h5>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ) : (
                  <Fragment key={eachDevice.device_id}>
                    <tr>
                      <td>{eachDevice.name}</td>
                      <td>
                        <div className='control'>
                          <div
                            onClick={() =>
                              changeData(
                                eachDevice.device_id,
                                eachDevice.data[0].value
                              )
                            }
                            className='turn-on-off'
                          >
                            <h5>On</h5>
                            <h5 className='active'>Off</h5>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                )
              ) : eachDevice.device_id === '1858273' ? (
                eachDevice.data.length !== 0 &&
                eachDevice.data[0].value === '54' ? (
                  <Fragment key={eachDevice.device_id}>
                    <tr>
                      <td>{eachDevice.name}</td>
                      <td>
                        <div className='control'>
                          <div
                            onClick={() =>
                              changeData(
                                eachDevice.device_id,
                                eachDevice.data[0].value
                              )
                            }
                            className='turn-on-off'
                          >
                            <h5 className='active'>On</h5>
                            <h5>Off</h5>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ) : (
                  <Fragment key={eachDevice.device_id}>
                    <tr>
                      <td>{eachDevice.name}</td>
                      <td>
                        <div className='control'>
                          <div
                            onClick={() =>
                              changeData(
                                eachDevice.device_id,
                                eachDevice.data[0].value
                              )
                            }
                            className='turn-on-off'
                          >
                            <h5>On</h5>
                            <h5 className='active'>Off</h5>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                )
              ) : eachDevice.device_id === '1858277' ? (
                eachDevice.data.length !== 0 ? (
                  <Fragment key={eachDevice.device_id}>
                    <tr>
                      <td>{eachDevice.name}</td>
                      <td>
                        <div className='control'>
                          <div className='turn-on-off-range '>
                            <input
                              type='range'
                              className='form-range'
                              min='0'
                              max='40'
                              step='1'
                              defaultValue={eachDevice.data[0].value}
                              onClick={(e) =>
                                changeData(eachDevice.device_id, e.target.value)
                              }
                              // onBlur=()
                            />
                            <label>{eachDevice.data[0].value}</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ) : (
                  console.log('Nothing')
                )
              ) : (
                console.log('Nothing')
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};
Rooms.propTypes = {
  device: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  fetchBot: PropTypes.func.isRequired,
  postData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, { fetchData, fetchBot, postData })(
  Rooms
);
