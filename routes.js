//BRINGS STUFF FROM controller.js
const controller = require("./controller");
//BRINGS STUFF FROM controller.js

//STUFF TO EXPORT TO server.js
module.exports = function(app){
    app.get('/tasks', controller.index)
    app.post('/tasks', controller.create)
    app.delete('/tasks/:_id', controller.delete)
    app.get('/tasks/:_id', controller.view)
    app.put('/tasks/:_id', controller.update)
}
//STUFF TO EXPORT TO server.js