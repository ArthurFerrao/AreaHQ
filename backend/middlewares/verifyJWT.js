const jwt = require('jsonwebtoken');
const config = require('../config');

const { SECRET } = config.jwt;

export default verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(401).json({error: 'Invalid token.'});

    req.body.user = decoded.user;
    next();
  });
};