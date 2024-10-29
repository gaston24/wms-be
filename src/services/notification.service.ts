import { User } from '../models';

class NotificationService {
  async getUserById(userId: number): Promise<any> {
    return User.findByPk(userId);
  }

  async sendNotification(user: number, message: string): Promise<boolean> {
    const userToSend = await this.getUserById(user);

    console.log(`=====================================================================`);
    console.log(`send notification to user: ${userToSend.userName}: ${message}`);
    console.log(`=====================================================================`);

    return true;
  }

  async sendEmail(user: number, subject: string): Promise<boolean> {
    const userToSend = await this.getUserById(user);

    console.log(`=====================================================================`);
    console.log(`send email to user: ${userToSend.email} with subject: ${subject}`);
    console.log(`=====================================================================`);

    return true;
  }
}

export default new NotificationService();
