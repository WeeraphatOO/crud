import { Address } from 'src/address/entities/address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;
  
  @OneToMany(type => Address, address => address.user)
  @JoinColumn()
  addresses : Address[];
}