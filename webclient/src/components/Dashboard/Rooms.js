import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import '../../bootstrap.min.css';

const Rooms = () => {
  return (
    <div className='rooms'>
      <h2>Rooms/Devices On</h2>
      <div className='row'>
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
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Rooms</th>
            <th>Names</th>
            <th>Types</th>
            <th>Status</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Living Room</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Work Room</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Kitchen</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Bedroom 1</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Bedroom 2</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Bathroom 1</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Bathroom 2</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
          <tr>
            <td>Kid Room</td>
            <td>0/2</td>
            <td>1/1</td>
            <td>1/2</td>
            <td>1/2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
