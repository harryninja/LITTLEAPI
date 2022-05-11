# RUN THE PROJECT

`docker-compose up`

## INSPECT YOUR MYSQL CONTAINER(to see your database)

1. docker ps
2. docker exec -it YOUR_MYSQL_CONTAINER_ID bash
3. mysql -u root -p
4. put the password(123)
5. enter
6. use LITTLEAPI;
7. show tables;
8. describe USER;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
