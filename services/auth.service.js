require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Role } = require('../models');

const SECRET_KEY = process.env.SECRET_KEY;

async function login(username, password) {
  const user = await User.findOne({ where: { user_name: username } });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await user.verifyPassword(password);
  if (!isMatch) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

async function register(data, roleName) {
  const role = await Role.findOne({ where: { name: roleName } });
  if (!role) {
    throw new Error('Role not found');
  }

  const user = await User.create({ ...data, role_id: role.id });
  return user;
}

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { login, register, authMiddleware };
