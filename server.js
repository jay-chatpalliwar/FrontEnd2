const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
require('dotenv').config();

// console.log(process.env.PORT);
const port = process.env.port || 4000;
app.listen(port ,() =>{
    console.log("App listening on port : " + port);
});
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const {addMessage} = require('./controllers/addMessage');
app.post('/addMessage',addMessage);

const {getMessages} = require('./controllers/getMessages');
app.get('/getMessages',cors(),getMessages);

// route
const user = require("./routes/user");
app.use("/", user);
// const routes = require("./routes/routes");
// app.use("/",routes);

const dbConnect = require('./config/database');
dbConnect();