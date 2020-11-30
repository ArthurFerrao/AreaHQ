const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: {
    port: process.env.PORT
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};

export default config;