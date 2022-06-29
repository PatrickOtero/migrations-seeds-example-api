const knex = require('knex') ({
    client: "pg",
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'migrationsSeeds',
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
});

module.exports = knex;
