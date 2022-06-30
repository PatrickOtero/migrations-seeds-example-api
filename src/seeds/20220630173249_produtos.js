exports.seed = async function(knex) {
 
  const produto = {
    id: 1,
    usuario_id: 1,
    nome: "Camisa branca",
    categoria: "Camisa",
    preco: 50000,
    descricao: "Uma camisa branca bem feita",
    imagem: "",
    estoque: 50
  }

  await knex('produtos').del()
  await knex('produtos').insert(produto);
};
