# React + Node.js + MySQL + Tailwind でTodoアプリ

### How to start this app

***

First, clone this repository
```
git clone https://github.com/haradaiko100/node-react-todo.git
```


Then, run
```
docker-compose up -d
```

and if it is the first time to run this application, run
```
docker-compose run --rm server npx sequelize-cli db:migrate
```

and finally run
```
cd client
npm start
```