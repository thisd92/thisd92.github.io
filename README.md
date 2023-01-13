# thisd92.github.io

Neste repositório você encontra a aplicação de um compilado de projetos Web.

#### 1 - Color Changer

Página em que ao apertar um botão colorido, você altera o background para a cor clicada.

#### 2 - Lista de Compras / Grocery List

Aplicação em que pode-se criar uma lista de compras através da adição de itens digitados.
Utilizado somente Javascript, realizando a gravação dos itens no LocalStorage do navegador.

#### 3 - jQuery

Página com aplicação de jQuery, no mesmo modelo do CRUD em CSS Grid.
Você insere um texto no textarea e ao enviar, ele replica o conteúdo no espaço logo abaixo.

#### 4 - CRUD

Projeto de CRUD, ainda em construção, utilizando VanillaJs, para cadastro de usuários.
Utilizado xMLHttpRequest para realizar as requisições.
Contém também uma função AJAX (assíncrono) que faz autocomplete do CEP.
Foram construídas 2 páginas utilizando recursos diferentes:
- Um CRUD em uma página com estrutura Flexbox
- Uma página com estrutura CSS Grid com aplicação

----------------------------------------------------------------------
Para testar o CRUD, podes iniciar um novo projeto
- No console inicie o projeto node -> npm init -y
- Também no console, instale o json-server -> npm i json-server
- No arquivo package.json incluir o script "start": "json-server --watch db.json"
- crie um arquivo db.json com o seguinte conteúdo:
- - { "users": [{}]}
- - Acrescente um usuário inicial com id: 1
- Ainda no console, inicie o server -> npm start
