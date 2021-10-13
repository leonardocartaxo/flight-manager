import { PersonEntity } from '../entities/person.entity';
import { BaseEntityKeys } from '../../../libs/base-entity';
import { CustomerEntity } from '../entities/customer.entity';

export class CustomerDtoCreate
  implements Omit<CustomerEntity, BaseEntityKeys | 'personId'>
{
  person: PersonEntity;
}

export class CustomerDtoUpdate extends CustomerDtoCreate {}

export class CustomerDto extends CustomerEntity {}

export const toCustomerDto = (entity: CustomerEntity): CustomerDto => {
  return {
    ...entity,
  };
};
