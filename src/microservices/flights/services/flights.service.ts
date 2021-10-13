import { Injectable } from '@nestjs/common';
import {
  FlightDto,
  FlightDtoCreate,
  FlightDtoUpdate,
  toFlightDto,
} from '../dtos/flight.dtos';
import { BaseService } from '../../../libs/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import FlightsRepository from '../repositories/flights.repository';
import { FlightEntity } from '../entities/flight.entity';
import { EntityManager, SaveOptions } from 'typeorm';
import { FlightExpenseEntity } from '../entities/flight-expense.entity';
import FlightExpensesRepository from '../repositories/flight-expenses.repository';
import FlightPassengersRepository from '../repositories/flight-passengers.repository';
import CrewsRepository from '../repositories/crew.repository';
import CrewAttendantsRepository from '../repositories/crew-attendants.repository';

@Injectable()
export class FlightsService extends BaseService<
  FlightEntity,
  FlightDto,
  FlightDtoCreate,
  FlightDtoUpdate
> {
  constructor(
    @InjectRepository(FlightsRepository)
    private readonly flightsRepository: FlightsRepository,
    @InjectRepository(FlightExpensesRepository)
    private readonly flightExpensesRepository: FlightExpensesRepository,
    @InjectRepository(FlightPassengersRepository)
    private readonly flightPassengersRepository: FlightPassengersRepository,
    @InjectRepository(CrewsRepository)
    private readonly crewsRepository: CrewsRepository,
    @InjectRepository(CrewAttendantsRepository)
    private readonly crewAttendantsRepository: CrewAttendantsRepository,
  ) {
    super(flightsRepository, toFlightDto, [
      'landingAirport',
      'takeOffAirport',
      'crew',
      'crew.pilot',
      'crew.coPilot',
      'crew.attendants',
      'crew.attendants.staff',
      'crew.attendants.staff.person',
      'expense',
      'passengers',
      'passengers.passenger',
      'passengers.passenger.person',
    ]);
  }

  async createBulk(createDto: FlightDtoCreate): Promise<FlightDto> {
    const entityToSave = await this.flightsRepository.create(createDto);
    entityToSave.expense = {
      ...createDto.expense,
    } as FlightExpenseEntity;
    // entityToSave.expense = {
    //   ...createDto.expense,
    //   id: '',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   deletedAt: new Date(),
    //   flight: null,
    //   flightId: null,
    // };
    // createDto.expense = await this.flightsRepository.manager.create(
    //   FlightExpenseEntity,
    //   createDto.expense,
    // );
    const saved = await this.flightsRepository.save(entityToSave);

    // const entityToSave = await this.flightsRepository.create(createDto);
    // const saved = await this.flightsRepository.save(entityToSave);

    return this.get(saved.id);
  }

  async create(
    createDto: FlightDtoCreate,
    options?: SaveOptions,
    manager?: EntityManager,
  ): Promise<FlightDto> {
    const queryRunner = await this.getNewQueryRunner();
    manager = queryRunner.manager;
    try {
      const flightEntity = await this.flightsRepository.save(
        createDto,
        options,
        manager,
      );

      const expense = await this.flightExpensesRepository.save(
        {
          ...createDto.expense,
          flightId: flightEntity.id,
        },
        options,
        manager,
      );

      const crew = await this.crewsRepository.save(
        createDto.crew,
        options,
        manager,
      );

      for (const it of createDto?.crew?.attendants) {
        await this.crewAttendantsRepository.save(
          {
            crewId: crew.id,
            staffId: it.staffId,
          },
          options,
          manager,
        );
      }

      for (const it of createDto?.passengers) {
        await this.flightPassengersRepository.save(
          {
            flightId: flightEntity.id,
            passengerId: it.passengerId,
          },
          options,
          manager,
        );
      }

      await this.flightsRepository.updatePartial(
        flightEntity.id,
        {
          expenseId: expense.id,
          crewId: crew.id,
        },
        manager,
      );

      await queryRunner.commitTransaction();

      return await this.get(flightEntity.id);
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
