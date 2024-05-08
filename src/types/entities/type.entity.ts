import { ObjectType, Field, Int, } from '@nestjs/graphql';
import { Monster } from 'src/monsters/monster.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Type {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;;

  @Column()
  @Field(() => [String], { description: 'Example field (placeholder)' })
  elements: string[];

  @OneToMany(() => Monster, (monster) => monster.type)
  @Field(() => [Monster])
  monsters: Monster[];
}
