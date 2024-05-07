import { Injectable } from '@nestjs/common';
import { Monster } from './monster.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonsterDTO } from './dtos/createMonster.dto';

@Injectable()
export class MonstersService {

    constructor(
        @InjectRepository(Monster)
        private readonly monsterRepository: Repository<Monster>,
    ) { }

    async findAll(): Promise<Monster[]> {
        const monsters = await this.monsterRepository.find();

        return monsters;
    }

    addMonster(createMonsterDTO: CreateMonsterDTO): Promise<Monster> {
        const newMonster = this.monsterRepository.create(createMonsterDTO);

        return this.monsterRepository.save(newMonster);
    }

    findOne(id: number): Promise<Monster> {
        return this.monsterRepository.findOneByOrFail({ id });
    }
}
