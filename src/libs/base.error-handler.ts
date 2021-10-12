import { InternalServerErrorException } from '@nestjs/common';

export const handleControllerGenericErrors = (error: any) => {
  throw new InternalServerErrorException(error);
};
