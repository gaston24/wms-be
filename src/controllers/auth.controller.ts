import { Request, Response } from 'express';
import { login, register } from '../services/auth.service';

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    try {
      const token = await login(username, password);
      res.json({ token });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    const { role, ...userData } = req.body;
    try {
      const user = await register(userData, role);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
