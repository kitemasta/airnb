import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100 }) name: string;

  @Column("text") pictureUrl: string;

  @Column("varchar", { length: 255 }) description: string;

  @Column("int", { default: false }) price: number;

  @Column("int", { default: false }) beds: number;

  @Column("int", { default: false }) guests: number;

  @Column("double precision", { default: false }) latitude: number;

  @Column("double precision", { default: false }) longitude: number;

  @Column("text", { array: true }) amenities: string[];
}
