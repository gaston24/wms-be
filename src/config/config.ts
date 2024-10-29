import 'dotenv/config';

interface DBConfig {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  port: number | undefined;
  dialect: 'mysql';
  use_env_variable?: string;
}

interface Config {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
}

const config: Config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    dialect: 'mysql',
    use_env_variable: process.env.DATABASE_URL,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    username: undefined,
    password: undefined,
    database: undefined,
    host: undefined,
    port: undefined
  }
};


export default config;
