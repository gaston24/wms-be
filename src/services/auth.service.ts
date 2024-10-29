import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';
import { Role } from '../models/role';

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function login(username: string, password: string): Promise<string> {
  const user = await User.findOne({ where: { userName: username } });
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

export async function register(data: any, roleName: string): Promise<any> {
  const role = await Role.findOne({ where: { name: roleName } });
  if (!role) {
    throw new Error('Role not found');
  }

  const user = await User.create({ ...data, role_id: role.id });
  return user;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token is required' });
    return;
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token' });
      return;
    }
    req.body.userId = (decoded as { id: number }).id;
    next();
  });
};
