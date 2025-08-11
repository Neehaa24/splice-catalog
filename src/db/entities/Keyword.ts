import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "keywords" })
export class Keyword {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 200 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description!: string | null;
}
