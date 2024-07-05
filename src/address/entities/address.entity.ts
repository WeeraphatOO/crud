import { distinct } from 'rxjs';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  sub_distinct: string;

  @Column()
  distinct: string;
  //sdfaghasudf

  @Column()
  province: string;

  @Column()
  post_code: string;

  @ManyToOne(type => User, user => user.addresses)
  @JoinColumn()
  user: User;
}