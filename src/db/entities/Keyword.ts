import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class Keyword {
  @PrimaryGeneratedColumn()
  id: number;

@Column()
name: string;

@Column({ nullable: true})
description: string;
}
