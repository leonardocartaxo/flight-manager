// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

const envFilePath = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

dotenv.config({ path: envFilePath });
module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOGGING,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  dropSchema: process.env.DB_DROP_SCHEMA === 'true',
  migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  entities: ['./src/microservices/**/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
