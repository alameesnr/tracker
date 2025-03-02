const express = require('express')
const mongoose = require('mongoose')
const transaction = require('./routes/transactions.js')
const expense = require('./routes/expense.js')
const user = require('./routes/user.routes.js')
const {readdirSync} = require('fs')

const cors = require('cors')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
//const usermod = require('./models/User.Model.js')

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get('/', (req, res)=>{
    res.send("Welcome to Backend")
})



app.use('/api/income', transaction)
app.use('/api/expense', expense)
app.use('/api/user/register', user)
app.use('/api/user', user)


app.listen(3001, (req, res)=>{
    console.log("Server is running at 3001")

})


mongoose.connect("mongodb+srv://veteranalamin:expense1234@cluster0.vc30ydh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connection Successful")

})

.catch(()=>{
    console.log("Connection Failed!")
})





