const table = 'categorias';

exports.up = function(knex) {
    return knex.schema
    .createTable(table, function (table) {
        table.increments('id');
        table.string('nome', 50).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTable(table);
};
