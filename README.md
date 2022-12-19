<h1 align="left">Commerce - MongoDB</h1>

###

<p align="left">The Commerce project aims to practice MongoDB queries on a database containing McDonald's menu data, such as ingredients, nutritional values and fictitious sales data.</p>

###

<h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" width="62" alt="mongodb logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="62" alt="docker logo"  />
</div>

###

<h2 align="left">How to use the application</h2>

###

Clone the application using the `git clone` command. After that, enter the project folder using the `cd commerce-mongodb` command.

###

<h2 align="left">About the database</h2>

###

### - To create the database through Docker, follow these steps:

- 1 - Access the root folder of the project

- 2 - Use the command `docker run -d --name=containerName -v "$PWD:/app" -p 27017:27017 mongo:5.0`.

- 3 - With the container running, access the container's terminal with the command `docker exec -it nameOfContainer mongosh`.

- 4 - Copy the contents of the file `./database.mongodb`, paste it in the terminal and press ENTER.

### - If you use MongoDB locally, the file to populate the database is found at `./database.mongodb`.

###

<h2 align="left">Challenges (Queries)</h2>

The challenges (queries) made in the project are found in the folder `./challenges`. There are 32 challenges with their respective descriptions.

###
