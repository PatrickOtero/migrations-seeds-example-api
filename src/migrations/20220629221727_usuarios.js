exports.up = function(knex) {
    return knex.schema
    .createTable('usuarios', function (table) {
        table.increments('id');
        table.string('nome', 50).notNullable();
        table.string('nome_loja', 100).notNullable();
        table.text("email").notNullable();
        table.text("senha").notNullable();
    })
};


exports.down = function(knex) {
  return knex.schema
  .dropTable("usuarios");
};
