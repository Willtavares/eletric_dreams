# EletricDreams

O Desafio está dividido em duas frentes: Backend e Front

A api feito em Backend está configurado para popular com os dados de exemplo de Feeds e Posts.


# Backend

Instalação.

Habilite o banco de dados MongoBD. Maiores detalhes depende da versão que esteja usando.
Dentro da pasta "backend" digit npm instal para instalar as dependências.
Após a instalação, digite node server.js

O sistema irá inicializar e o sistema dará seu prompt de carregamento no console.
Após, acesse o nevegador ou o Postman e digite o endereço para popular os dados:
http://localhost:8081/api/feeds/init

O sistema informará que os dados foram inseridos.

Através do endereço:
http://localhost:8081/api/feeds/

Você já pode ver os dados inseridos no banco de dados.


E através do endereço:
http://localhost:8081/api/posts/

Pode ser visto todos os posts disponiveis.


Pelo endereço
http://localhost:8081/api/posts/feed/ + "Id do Feed"

Se vê dos posts daquele determinado feed.

*************************************************************************

# Front

O Frontend foi constituido em Angular.

Instalação:

É muito importante que se usae a instalção baseada nesta vesão através do comendo: npm install -g @angular/cli@6.0.8

Dentro da pasta Front intele as dependências com o comando npm install.

Após a instalação das dependências, digite o comando ng serve.

O Frontend inicializará no endereço padrão http://localhost:4200

O Frontend se inicializa na página com os feeds e desejando acessar os posts contidos nos feeds é só clicar sobre o Link ao lado.