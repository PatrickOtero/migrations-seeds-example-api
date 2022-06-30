exports.seed = async function(knex) {
  const lojaTeste = {
    nome: 'Vanessa Carvalho',
    nome_loja: 'The World',
    email: 'vanessa@email.teste.com',
    senha: 'senhadificil'
  };

  const table = 'usuarios';

  const usuarioInserido = await knex(table)
    .where({ email: lojaTeste.email })
    .first();

  !usuarioInserido && await knex(table).insert(lojaTeste);
};
