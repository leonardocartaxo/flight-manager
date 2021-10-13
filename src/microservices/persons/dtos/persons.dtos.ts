import { BaseEntityKeys } from '../../../libs/base-entity';
import { PersonEntity } from '../entities/person.entity';

export class PersonDtoCreate implements Omit<PersonEntity, BaseEntityKeys> {
  document: string;
  firstName: string;
  lastName: string;
  address?: string;
  birthDate: Date;
}

export class PersonDtoUpdate extends PersonDtoCreate {}

export class PersonDto implements PersonEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  birthDate: Date;
  document: string;
  firstName: string;
  lastName: string;
}

export const toPersonDto = (entity: PersonEntity): PersonDto => {
  return {
    ...entity,
  };
};
