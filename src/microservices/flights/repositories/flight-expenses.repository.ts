import { EntityRepository } from 'typeorm';
import BaseRepository from '../../../libs/base.repository';
import { FlightExpenseEntity } from '../entities/flight-expense.entity';

@EntityRepository(FlightExpenseEntity)
export default class FlightExpensesRepository extends BaseRepository<FlightExpenseEntity> {}
