import { Module } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { MonstersResolver } from './monsters.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from './monster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Monster])
  ],
  providers: [MonstersService, MonstersResolver]
})
export class MonstersModule { }
