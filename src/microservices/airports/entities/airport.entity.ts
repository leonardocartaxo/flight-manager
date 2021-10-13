import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';

@Entity('airports')
export class AirportEntity extends BaseEntity {
  @Column()
  contractDate: Date;
  @Column()
  expiresDate: Date;
  @Column()
  name: string;
  @Column()
  address: string;
}
