import { PilotEntity } from '../entities/pilot.entity';
import { BaseEntityKeys } from '../../../libs/base-entity';
import { StaffDtoCreate } from './staff.dtos';

export class PilotDtoCreate
  implements Omit<PilotEntity, BaseEntityKeys | 'staffId' | 'staff'>
{
  staff: StaffDtoCreate;
}

export class PilotDtoUpdate extends PilotDtoCreate {}

export class PilotDto extends PilotEntity {}

export const toPilotDto = (entity: PilotEntity): PilotDto => {
  return {
    ...entity,
  };
};
