import { AspersionControlRepository } from '../repositories/aspersion_control_repository';
import { CreateAspersionControlDto, AspersionControlResponseDto } from '../dto/aspersion_control_dto';

export class AspersionControlService {
  private aspersionControlRepository: AspersionControlRepository;

  constructor() {
    this.aspersionControlRepository = new AspersionControlRepository();
  }

  async createAspersionControl(dto: CreateAspersionControlDto): Promise<AspersionControlResponseDto> {
    const id = await this.aspersionControlRepository.createAspersionControl(dto);
    const newRecord = await this.aspersionControlRepository.getAspersionControlById(id);
    if (!newRecord) {
      throw new Error('Failed to retrieve the newly created record.');
    }
    return { ...newRecord };
  }

  async getAllAspersionControls(): Promise<AspersionControlResponseDto[]> {
    return await this.aspersionControlRepository.getAllAspersionControls();
  }

  async getAspersionControlById(id: number): Promise<AspersionControlResponseDto | null> {
    return await this.aspersionControlRepository.getAspersionControlById(id);
  }

  // // Soon to be implemented more methods
}