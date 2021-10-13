import { BaseEntityKeys } from '../../../libs/base-entity';
import { CrewEntity } from '../entities/crew.entity';
import { CrewAttendantDtoCreateBulk } from './crew-attendant.dtos';

export class CrewDtoCreateBulk
  implements
    Omit<CrewEntity, BaseEntityKeys | 'pilot' | 'coPilot' | 'attendants'>
{
  attendants: CrewAttendantDtoCreateBulk[];
  coPilotId: string;
  pilotId: string;
}
