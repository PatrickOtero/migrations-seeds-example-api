const knex = require('knex') ({
    client: "pg",
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'migrationsSeeds',
        password: 'postgres',
    }
});

module.exports = knex;
