import { BaseEntityKeys } from '../../../libs/base-entity';
import { AirplaneEntity } from '../entities/airplane.entity';

export class AirplaneDtoCreate implements Omit<AirplaneEntity, BaseEntityKeys> {
  manufacturer: string;
  model: string;
  purchaseDate: Date;
  year: number;
}

export class AirplaneDtoUpdate extends AirplaneDtoCreate {}

export class AirplaneDto extends AirplaneEntity {}

export const toAirplaneDto = (entity: AirplaneEntity): AirplaneDto => {
  return {
    ...entity,
  };
};
