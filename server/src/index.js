

const express = require('express')

const app = express();
const PORT = 3001;
//const mysql = require('mysql2');
const bodyParser = require("body-parser");
//const { Sequelize } = require('sequelize');
const taskRoutes = require("./routes/taskRoutes");
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors({origin:true,credentials:true}))


app.use(taskRoutes)

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})