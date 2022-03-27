import React from 'react';

const Rooms = () => {
  return (
    <div className='rooms'>
      <h2>Rooms/Devices On</h2>
      <table>
        <thead>
          <tr>
            <th>Rooms</th>
            <th>Lights</th>
            <th>AC</th>
            <th>Fan</th>
            <th>Alarm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Living Room</td>
            <td>0/2</td>
            <td>1/1</td>
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
