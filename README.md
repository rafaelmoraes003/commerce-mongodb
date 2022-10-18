<h1 align="left">Commerce - MongoDB</h1>

###

<p align="left">O projeto Commerce tem como objetivo praticar queries do MongoDB em um banco de dados contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.</p>

###

<h2 align="left">Tecnologias utilizadas</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" width="62" alt="mongodb logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="62" alt="docker logo"  />
</div>

###

<h2 align="left">Como utilizar a aplicação</h2>

###

Faça o clone da aplicação usando o comando `git clone`. Após isso, entre na pasta do projeto utilizando o comando `cd commerce-mongodb`.

###

<h2 align="left">Sobre o banco de dados</h2>

###

### - Para criar o banco de dados através do Docker, siga os seguintes passos:

- 1 - Acesse a pasta raiz do projeto

- 2 - Utilize o comando `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`.

- 3 - Com o container em execução, acesse o terminal do container com o comando `docker exec -it nomeDoContainer mongosh`.

- 4 - Copie o conteúdo do arquivo `./database.mongodb`, cole no terminal e aperte ENTER.

### - Caso utilize o MongoDB localmente, o arquivo para popular o banco de dados se encontra em `./database.mongodb`.

###

<h2 align="left">Desafios (Queries)</h2>

Os desafios (queries) feitas no projeto se encontram na pasta `./challenges`. São 32 desafios com suas respectivas descrições.

###

