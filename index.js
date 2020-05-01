const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const homeRouts = require('./routs/home')
const taskRouts = require('./routs/api/task')

// Ссылка для подключения к mongoDB
const MONGODB_URL = `http://localhost:27017/mytest`

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))

app.use('/', homeRouts)
app.use('/api/task', taskRouts)

const PORT = process.env.PORT || 3005

async function start(){
    try {
        await mongoose.connect('mongodb://localhost:27017/myapi', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }

}
start()
