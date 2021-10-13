import { StaffEntity } from '../entities/staff.entity';
import { PersonEntity } from '../entities/person.entity';
import { BaseEntityKeys } from '../../../libs/base-entity';

export class StaffDtoCreate
  implements Omit<StaffEntity, BaseEntityKeys | 'personId'>
{
  person: PersonEntity;
}

export class StaffDtoUpdate extends StaffDtoCreate {}

export class StaffDto extends StaffEntity {}

export const toStaffDto = (entity: StaffEntity): StaffDto => {
  return {
    ...entity,
  };
};
