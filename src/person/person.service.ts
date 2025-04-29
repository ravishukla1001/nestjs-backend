// src/person/person.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Person } from './entity/person.entity';
import { CreatePersonDto } from './dto/person.dto';
import { encrypt, decrypt } from '../utils/crypto.helper';

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person) private personModel: typeof Person) {}

  async create(dto: CreatePersonDto): Promise<Person> {
    return this.personModel.create({
      ...dto,
      name: encrypt(dto.name),
      email: encrypt(dto.email),
    });
  }

  async findAll(): Promise<any[]> {
    const persons = await this.personModel.findAll();
    return persons.map((p) => ({
      ...p.toJSON(),
      name: decrypt(p.name),
      email: decrypt(p.email),
    }));
  }
}
