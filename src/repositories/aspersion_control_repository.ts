import { RowDataPacket, ResultSetHeader } from 'mysql2';
import pool from '../config/dbconfig';
import { CreateAspersionControlDto } from '../dto/aspersion_control_dto';

interface AspersionControlResult extends RowDataPacket, CreateAspersionControlDto {
  id: number;
  created_at: Date;
}

export class AspersionControlRepository {
  async createAspersionControl(dto: CreateAspersionControlDto): Promise<number> {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO concentration_control (record_date, record_time, product, concentration, filter_area, responsible, observations) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        dto.fecha,
        dto.hora,
        dto.producto,
        dto.concentration,
        dto.filtro,
        dto.responsable,
        dto.observaciones,
      ]
    );
    return result.insertId;
  }

  async getAllAspersionControls(): Promise<AspersionControlResult[]> {
    const [rows] = await pool.execute<AspersionControlResult[]>('SELECT * FROM concentration_control');
    return rows;
  }

  async getAspersionControlById(id: number): Promise<AspersionControlResult | null> {
    const [rows] = await pool.execute<AspersionControlResult[]>('SELECT * FROM concentration_control WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  // Soon to be implemented more methods
}