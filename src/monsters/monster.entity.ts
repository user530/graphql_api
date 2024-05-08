import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'src/types/entities/type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Monster {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field(() => String)
    name: string;


    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    description?: string;

    @Column()
    @Field(() => Int)
    typeId: number;

    @ManyToOne(() => Type, (type) => type.monsters)
    @Field(() => Type)
    type: Type;
}