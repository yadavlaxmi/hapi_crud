module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'hapi_crud',
      user:     'postgres',
      password: 'laxmi@123'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

}