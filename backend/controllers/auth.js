const jwt = require('jsonwebtoken');
const users =  require('../data/users.json');

const SECRET = 'teste';

exports.login = (req, res) => {
  const { username, password } = req.body;

  user = users.find(user => user.username === username);
  if(!user || user.password !== password) return res.status(401).json({error: 'Invalid credentials.'});

  const token = jwt.sign({username: user.username}, SECRET);
  return res.status(200).json({auth: true, token});
};

exports.register = (req, res) => {
  const { username, password, name } = req.body;
  const reqUser = {username, password, name}

  user = users.find(user => user.username === username);
  if(user) return res.status(400).json({error: 'User already exists.'});

  users.push(reqUser);
  return res.status(200).json(reqUser);
};