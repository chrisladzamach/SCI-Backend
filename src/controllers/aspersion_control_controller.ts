import { Request, Response, NextFunction } from 'express';
import { AspersionControlService } from '../services/aspersion_control_service';
import { CreateAspersionControlDto } from '../dto/aspersion_control_dto';

export class AspersionControlController {
  private aspersionControlService: AspersionControlService;

  constructor() {
    this.aspersionControlService = new AspersionControlService();
  }

  async createAspersionControl(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dto: CreateAspersionControlDto = req.body;
      const newRecord = await this.aspersionControlService.createAspersionControl(dto);
      res.status(201).json(newRecord);
    } catch (error) {
      console.error('Error creating aspersion control:', error);
      next(error); 
    }
  }

  async getAllAspersionControls(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const records = await this.aspersionControlService.getAllAspersionControls();
      res.status(200).json(records);
    } catch (error) {
      console.error('Error getting all aspersion controls:', error);
      next(error); 
    }
  }

  async getAspersionControlById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const record = await this.aspersionControlService.getAspersionControlById(id);
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ message: 'Aspersion control record not found' });
      }
    } catch (error) {
      console.error('Error getting aspersion control by ID:', error);
      next(error); 
    }
  }

  // Soon to be implemented more controllers
}
