import { User } from '../models/user';
import { Role } from '../models/role';

export async function createUser(data: any): Promise<any> {
  return await User.create(data);
}

export async function getAllUsers(): Promise<any[]> {
  return await User.findAll({
    include: [
      {
        model: Role,
        attributes: ['id', 'name']
      }
    ]
  });
}

export async function getUserById(id: number): Promise<any | null> {
  return await User.findByPk(id, {
    include: [
      {
        model: Role,
        attributes: ['id', 'name']
      }
    ]
  });
}

export async function updateUser(id: number, data: any): Promise<[number]> {
  return await User.update(data, { where: { id } });
}

export async function deleteUser(id: number): Promise<number> {
  return await User.destroy({ where: { id } });
}
