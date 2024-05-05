import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonstersModule } from './monsters/monsters.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    MonstersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
