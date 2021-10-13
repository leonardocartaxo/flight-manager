import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';

@Entity('airplanes')
export class AirplaneEntity extends BaseEntity {
  @Column()
  purchaseDate: Date;
  @Column()
  manufacturer: string;
  @Column({ type: 'int' })
  year: number;
  @Column()
  model: string;
}
