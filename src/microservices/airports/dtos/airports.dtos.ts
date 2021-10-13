import { BaseEntityKeys } from '../../../libs/base-entity';
import { AirportEntity } from '../entities/airport.entity';

export class AirportDtoCreate implements Omit<AirportEntity, BaseEntityKeys> {
  address: string;
  contractDate: Date;
  expiresDate: Date;
  name: string;
}

export class AirportDtoUpdate extends AirportDtoCreate {}

export class AirportDto extends AirportEntity {}

export const toAirportDto = (entity: AirportEntity): AirportDto => {
  return {
    ...entity,
  };
};
