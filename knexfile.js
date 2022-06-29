module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      host: 'localhost',
      database: 'migrationseeds',
      password: 'newLife10',
    },
    migrations: {
      directory: "src/migrations",
      extension: "js",
    },
    seeds: { 
      directory: "src/seeds",
      extension: "js",
      timestampFilenamePrefix: true, 
      },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'migrationseeds',
      user:     'postgres',
      password: 'newLife10'
    },
  },
}
