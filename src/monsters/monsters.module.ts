import { Module } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { MonstersResolver } from './monsters.resolver';

@Module({
  providers: [MonstersService, MonstersResolver]
})
export class MonstersModule {}
