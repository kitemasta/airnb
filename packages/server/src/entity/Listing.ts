import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from './User';

@Entity("users")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100, nullable: true }) name: string;

  @Column("text", { nullable: true }) pictureUrl: string;

  @Column("varchar", { length: 255, nullable: true }) description: string;

  @Column("varchar", { length: 255, nullable: true }) category: string;

  @Column("int", { nullable: true }) price: number;

  @Column("int", { nullable: true }) beds: number;

  @Column("int", { nullable: true }) guests: number;

  @Column("double precision", { nullable: true }) latitude: number;

  @Column("double precision", { nullable: true }) longitude: number;

  @Column("text", { array: true, nullable: true }) amenities: string[];

  @Column("uuid", { nullable: true }) ownerId: string;

  @ManyToOne(() => User, user => user.listings)
  @JoinColumn({ name: 'ownerId' })
  user: User;
}
