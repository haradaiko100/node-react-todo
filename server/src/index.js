

const express = require('express')

const api = require("./api")
const app = express()
const PORT = 3001
const mysql = require('mysql2')


app.get('/',(req,res) => {
    res.json({
        message:"Hello World"
    })
})

app.use('/api',api);

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: `${process.env.DB_PASS}`,
    database:`${process.env.DB_NAME}`
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return
    }
    console.log('success');
  });


app.listen(PORT,() => {
    console.log(`Listening to http://localhost:${PORT}`)
})