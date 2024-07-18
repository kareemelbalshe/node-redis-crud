docker pull kareemelbalshy/node-express-mysql-redis-docker:latest
it is a node express mysql redis docker project
it just a simple project to CRUD operations in mysql and redis
it sum command line arguments to run the project
docker-compose up -d
docker exec -it <cont_id> mysql -u root -ptest

CREATE DATABASE ecom;
USE ecom;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(32) NOT NULL,
    des VARCHAR(255) NOT NULL,
    price INT NOT NULL
);

docker build -t kareemelbalshy/node-express-mysql-redis-docker .
docker push kareemelbalshy/node-express-mysql-redis-docker 