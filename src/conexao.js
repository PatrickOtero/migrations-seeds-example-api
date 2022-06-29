const knex = require('knex') ({
    client: "pg",
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'market_cubos',
        password: 'newLife10',
    }
});

module.exports = knex;