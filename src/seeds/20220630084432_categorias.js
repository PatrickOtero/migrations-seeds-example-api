const table = 'categorias';

exports.seed = async function(knex) {
  await knex(table).insert([
    { nome: 'Acessórios'},
    { nome: 'Livros'},
    { nome: 'Jogos'},
    { nome: 'Roupas'},
  ]);
};
