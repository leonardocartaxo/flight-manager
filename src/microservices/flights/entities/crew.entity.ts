import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../libs/base-entity';
import { PilotEntity } from '../../persons/entities/pilot.entity';
import { CrewAttendantEntity } from './crew-attendants.entity';

@Entity('crews')
export class CrewEntity extends BaseEntity {
  @Column()
  pilotId: string;

  @ManyToOne(() => PilotEntity)
  @JoinColumn()
  pilot: PilotEntity;

  @ManyToOne(() => PilotEntity)
  @JoinColumn()
  coPilot: PilotEntity;

  @Column()
  coPilotId: string;

  @OneToMany(() => CrewAttendantEntity, (entity) => entity.crew)
  @JoinColumn()
  attendants: CrewAttendantEntity[];
}
