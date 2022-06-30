const table = 'categorias';

exports.seed = async function(knex) {
  const categoriasInseridas = await knex(table);
    
  !categoriasInseridas.length && await knex(table).insert([
    { nome: 'Acessórios'},
    { nome: 'Livros'},
    { nome: 'Jogos'},
    { nome: 'Roupas'},
  ]);
};
