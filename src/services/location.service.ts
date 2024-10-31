import { Location } from '../models/location';

export async function createLocation(data: { locationCode: string }): Promise<Location> {
  const locationData = {
    locationCode: data.locationCode,
  };
  return Location.create(locationData);
}

export async function getAllLocations(): Promise<Location[]> {
  return Location.findAll();
}

export async function getLocationById(id: number): Promise<Location | null> {
  return Location.findByPk(id);
}

export async function updateLocation(id: number, data: { locationCode: string }): Promise<[number]> {
  return Location.update(data, { where: { id } });
}

export async function deleteLocation(id: number): Promise<number> {
  return Location.destroy({ where: { id } });
}
