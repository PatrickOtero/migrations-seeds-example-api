exports.up = function(knex) {
    return knex.schema
    .createTable('produtos', function (table) {
        table.increments('id');
        table.integer('usuario_id');
        table.decimal('nome', 50).notNullable();
        table.string('categoria', 20).notNullable();
        table.integer('preco').notNullable();
        table.text('descricao').notNullable();
        table.text('imagem').notNullable();
        table.integer('estoque').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("produtos")
};
