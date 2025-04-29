// src/person/person.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() dto: CreatePersonDto) {
    return this.personService.create(dto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }
}
