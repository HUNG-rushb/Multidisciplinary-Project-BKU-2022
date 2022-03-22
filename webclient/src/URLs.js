let URLs = {};

if (process.env.NODE_ENV === 'production') {
  URLs = {
    baseURL: 'https://bku-ces-iotsmarthouse.herokuapp.com/api',
    socketURL: 'https://bku-ces-iotsmarthouse.herokuapp.com/api',
  };
} else {
  URLs = {
    baseURL: 'http://localhost:5000/api',
    socketURL: 'http://localhost:5000/api',
  };
}

export default URLs;
