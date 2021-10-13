import { BaseEntityKeys } from '../../../libs/base-entity';
import { CrewAttendantEntity } from '../entities/crew-attendants.entity';

export class CrewAttendantDtoCreateBulk
  implements
    Omit<CrewAttendantEntity, BaseEntityKeys | 'crew' | 'staff' | 'crewId'>
{
  staffId: string;
}
