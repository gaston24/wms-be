const authService = require('../services/auth.service');

class AuthController {
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const token = await authService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async register(req, res) {
    const { role, ...userData } = req.body;  // Extrae el rol de la data
    try {
      const user = await authService.register(userData, role); // Pasa el rol al servicio
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
