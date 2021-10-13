import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { StaffEntity } from '../../persons/entities/staff.entity';
import { CrewEntity } from './crew.entity';

@Entity('crewAttendants')
export class CrewAttendantEntity extends BaseEntity {
  @Column()
  crewId: string;

  @ManyToOne(() => CrewEntity)
  @JoinColumn()
  crew: CrewEntity;

  @Column()
  staffId: string;

  @ManyToOne(() => StaffEntity)
  @JoinColumn()
  staff: StaffEntity;
}
