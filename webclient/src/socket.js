import React from 'react';
import URLs from './URLs';
import io from 'socket.io-client';

export const socket = io.connect(`${URLs.socketURL}/socket`);
export const SocketContext = React.createContext();
