import { Module } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { MonstersResolver } from './monsters.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from './monster.entity';
import { TypesModule } from '../types/types.module';
import { TypesService } from 'src/types/types.service';
import { Type } from 'src/types/entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Monster, Type]),
    TypesModule,
  ],
  providers: [MonstersService, MonstersResolver, TypesService]
})
export class MonstersModule { }
