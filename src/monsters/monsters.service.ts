import { Injectable } from '@nestjs/common';
import { Monster } from './monster.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
