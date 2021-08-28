require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.get('/', (req, res) => {
    res.send('Hello World')
})


const mongooseOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true
}

mongoose.connect(process.env.DB_URI, mongooseOptions, () => {
    console.log("Server connected to database")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});