import { Request, Response } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../services/user.service';

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const user = await getUserById(Number(req.params.id));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  }
  
  async updateUser(req: Request, res: Response): Promise<void> {
    const updated = await updateUser(Number(req.params.id), req.body);
    res.json(updated);
  }
  
  async deleteUser(req: Request, res: Response): Promise<void> {
    await deleteUser(Number(req.params.id));
    res.status(204).send();
  }
  
}

export default new UserController();
