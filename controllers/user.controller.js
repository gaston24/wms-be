const userService = require('../services/user.service');

class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req, res) {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  }

  async updateUser(req, res) {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.json(updated);
  }

  async deleteUser(req, res) {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  }
}

module.exports = new UserController();
