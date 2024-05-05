import { Query, Resolver } from '@nestjs/graphql';
import { MonstersService } from './monsters.service';
import { Monster } from './monster.entity';

@Resolver(() => Monster)
export class MonstersResolver {
    constructor(
        private monstersService: MonstersService
    ) { }

    @Query(() => [Monster])
    monsters(): Promise<Monster[]> {
        return this.monstersService.findAll();
    }
}
