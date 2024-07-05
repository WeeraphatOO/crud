import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AddressModule } from './address/address.module';
import { Address } from './address/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'NEBULAbone123',
    username: 'postgres',
    database: 'test',
    entities: [User,Address ],
    synchronize: true,
    }),UserModule, AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
