import { BaseEntity } from '../../../libs/base-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { StaffEntity } from './staff.entity';

@Entity('pilots')
export class PilotEntity extends BaseEntity {
  @Column({ nullable: true })
  staffId?: string;

  @OneToOne(() => StaffEntity, { cascade: true })
  @JoinColumn()
  staff: StaffEntity;
}
