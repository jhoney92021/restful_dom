//dependancies
//express
const express = require("express");
const app = express();

//FOR POSTS
app.use(express.urlencoded({extended: true}));
//FOR POSTS
//FOR JSON RETUNRS
app.use(express.json());
//FOR JSON RETUNRS
//TO USE ANGULAR FILE STRUCTURE
app.use(express.static( __dirname + '/public/dist/public' ));
//TO USE ANGULAR FILE STRUCTURE
//BRINGS STUFF FROM routes.js
require('./routes')(app)
//BRINGS STUFF FROM routes.js

// localhost:8000
//home route
app.get('/', (request, response) => {
        response.render('index');
});
// localhost:8000



// localhost:8000
app.listen(8000, () => console.log("listening on port 8000"));