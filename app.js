const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const app = express();

//Cors handle
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
//import routes
require("dotenv-flow").config();



//Parse request Json
app.use(bodyParser.json());



mongoose.connect(
    process.env.DBHOST,
    {
        
    }
).catch(error => console.log("Error connecting to MongoDB:" + error));

mongoose.connection.once('open', () => console.log('Connected to the MongoDB database.'));

//route
app.get ("/api/welcome", (req, res) =>{
    res.status(200).send({message: "Welcome to the MEN RESTful API"});
});
app.get ("/api/welcome1", (req, res) =>{
    const newColumn = new column({
        name: "column 1",
        position: 0
    })
    const newProject = new project({
        name: "New project",
        columns: [newColumn],
    });
    newProject.save();
    res.status(200).send({});
});

// routes
app.use("/api/project", projectRoutes);
app.use("/api/user", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port:" + PORT);

})
module.exports = app;