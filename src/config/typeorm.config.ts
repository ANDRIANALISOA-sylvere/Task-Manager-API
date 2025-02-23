import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'taskmanager',
  username: 'postgres',
  password: 'sily*',
  port: 5432,
  autoLoadEntities: true,
  synchronize: true,
};
