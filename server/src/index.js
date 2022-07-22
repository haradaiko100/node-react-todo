

const express = require('express')

const app = express();
const PORT = 3001;
const mysql = require('mysql2');
const bodyParser = require("body-parser");
//const { Sequelize } = require('sequelize');
const taskRoutes = require("./routes/taskRoutes");
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors({origin:true,credentials:true}))


app.use('/task', taskRoutes);

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'pass',
    database: 'todo'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return
    }
    console.log('success');
});


app.get("/", (req, res) => {
    connection.query(
        'SELECT * FROM Tasks',
        (err, result) => {
            console.log(result);
            //res.render("hello result:",result)
        }
    )
})

app.post("/task",(req,res) => {
    connection.query(
        'INSERT INTO todo'
    )
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})