import { Injectable } from '@nestjs/common';
import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypesService {

  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>
  ) { }

  create(createTypeInput: CreateTypeInput) {
    const newType = this.typeRepository.create(createTypeInput);
    newType.monsters = [{ id: 1, name: 'test', type: newType, typeId: 1 }];
    console.log(newType);
    return this.typeRepository.save(newType);
  }

  findAll() {
    return this.typeRepository.find();
  }

  findOne(id: number) {
    return this.typeRepository.findOneByOrFail({ id });
  }

  update(id: number, updateTypeInput: UpdateTypeInput) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
