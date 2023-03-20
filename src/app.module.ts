import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//graphql packages
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CourseModule } from './course/course.module';
import { join } from 'path';
import { UsersModule } from './users/users.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //typePaths: ['./**/*.graphql'],
    // definitions: {
    //   path: join(process.cwd(), 'src/graphql.ts')
    // },
  }), CourseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
