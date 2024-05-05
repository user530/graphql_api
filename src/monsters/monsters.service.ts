import { Injectable } from '@nestjs/common';
import { Monster } from './monster.entity';

@Injectable()
export class MonstersService {
    async findAll(): Promise<Monster[]> {
        const monster = new Monster();
        monster.id = 1;
        monster.name = 'Bat';

        return [monster];
    }
}
