const knex = require('knex') ({
    client: "pg",
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'migrationseeds',
        password: 'newLife10',
    },
});

module.exports = knex;
