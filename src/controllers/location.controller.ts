import { Request, Response } from 'express';
import { createLocation, getAllLocations, getLocationById, updateLocation, deleteLocation } from '../services/location.service';

class LocationController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const location = await createLocation(req.body);
      res.status(201).json(location);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const locations = await getAllLocations();
    res.json(locations);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const location = await getLocationById(Number(req.params.id));
    if (!location) {
      res.status(404).json({ message: 'Location not found' });
    } else {
      res.json(location);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const [updated] = await updateLocation(Number(req.params.id), req.body);
    if (!updated) {
      res.status(404).json({ message: 'Location not found' });
      return;
    }
    res.json({ message: 'Location updated successfully' });
  }

  async delete(req: Request, res: Response): Promise<void> {
    const deleted = await deleteLocation(Number(req.params.id));
    if (!deleted) {
      res.status(404).json({ message: 'Location not found' });
    } else {
      res.status(204).send();
    }
  }
}

export default new LocationController();
