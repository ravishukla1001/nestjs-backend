// src/person/entities/person.entity.ts
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'person',
  timestamps: true, // Correctly placed property
})
export class Person extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string; // Encrypted

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string; // Encrypted

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;
}
