export interface CreateAspersionControlDto {
  fecha: Date;
  hora: string;
  producto: string;
  concentration?: string;
  filtro: string;
  responsable: string;
  observaciones?: string;
}

export interface AspersionControlResponseDto extends CreateAspersionControlDto {
  id: number;
  created_at: Date;
}
