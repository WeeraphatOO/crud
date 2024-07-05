import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private AddressRepository : Repository<Address>
  ){}
  
  create(createAddressDto: CreateAddressDto) {
    return this.AddressRepository.insert(this.AddressRepository.create(createAddressDto));
  }

  findAll() {
    return this.AddressRepository.find();
  }

  findOne(id: number) {
    return this.AddressRepository.findBy({id});
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    let user = await this.AddressRepository.findOneBy({id : id});
    user = {...user,...updateAddressDto};
    return this.AddressRepository.save(user);
  }

  remove(id: number) {
    return this.AddressRepository.delete(id);
  }
}
