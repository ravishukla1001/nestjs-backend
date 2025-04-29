// src/person/person.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from './entity/person.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [SequelizeModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
