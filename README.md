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

<h2 align="left">Configurações necessárias</h2>

###

- `Docker` instalado.

###

<h2 align="left">Sobre o banco de dados</h2>

###

- 1 - Acesse a pasta raiz do projeto

- 2 - Utilize o comando `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`.

- 3 - Com o container em execução, acesse o terminal do `container docker exec -it nomeDoContainer mongosh`.

- 4 - Copie o conteúdo do arquivo ./database.mongodb, cole no terminal e aperte ENTER.

###
