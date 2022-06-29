
module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './src/conexao.js'
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
      database: 'migrationSeeds',
      user:     'postgres',
      password: 'newLife10'
    },
  },
}
