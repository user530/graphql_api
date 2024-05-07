import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MonstersService } from './monsters.service';
import { Monster } from './monster.entity';
import { CreateMonsterDTO } from './dtos/createMonster.dto';

@Resolver(() => Monster)
export class MonstersResolver {
    constructor(
        private monstersService: MonstersService
    ) { }

    @Query(() => [Monster])
    monsters(): Promise<Monster[]> {
        return this.monstersService.findAll();
    }

    @Mutation(() => Monster)
    createMonster(@Args('createMonsterDTO') createMonsterDTO: CreateMonsterDTO): Promise<Monster> {
        return this.monstersService.addMonster(createMonsterDTO);
    }
}
