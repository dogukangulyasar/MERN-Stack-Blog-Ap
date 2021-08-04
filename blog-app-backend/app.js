const express = require('express'); //including expressJS
const mongoose = require('mongoose');
const app = express(); //creating app as an express
const postsRoute = require('./Routes/Posts');
require('dotenv/config')
const cors = require('cors');
app.use(cors());
app.options('*',cors());
//Middleware


app.use(express.json()); //req.body

//Connect to database
mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
//

app.listen(4000, () => {
    console.log("Started Project on 4000");
})

app.use('/posts', postsRoute);