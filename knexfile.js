// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'gurzu',
      user:     'root',
      password: 'paneru1997'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migration'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migration'
    }
  }

};
