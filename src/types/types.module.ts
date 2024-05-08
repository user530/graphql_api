import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesResolver } from './types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Type
    ])
  ],
  providers: [TypesResolver, TypesService],
})
export class TypesModule { }
