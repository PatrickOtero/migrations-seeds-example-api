# API de prática para migrations e seeds.


 ## Caso queira testar localmente:
    1° - Clone o repositório localmente
    2° - Execute o comando no diretório raíz (onde está localizada a pasta src): "npm i" ou "yarn"
    3° - Execute o comando no mesmo local: "npm run dev" ou "yarn dev"
    4° - Execute o comando: "npm run migration:run" ou "yarn migration:run"
    5° - Execute o comando "npm run seed:run" ou "yarn seed:run"
    
  - Após executar estes comandos, surgirão as tabelas "categorias", "produtos" e "usuarios" no seu banco de dados PostgreSQL local, populados com alguns dados.
  - Para mudar de banco de dados precisará alterar devidamente os arquivos "conexao.js" e "knexfile.js".
