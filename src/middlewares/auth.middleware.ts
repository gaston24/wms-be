import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY as string;

interface AuthRequest extends Request {
  userId?: number;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
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
    req.userId = (decoded as { id: number }).id;
    next();
  });
};

export default authMiddleware;
