//REQUIRED
const mongoose = require('mongoose');
//REQUIRED

//CONNECT
mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true});
//CONNECT

//SCHEMAS
//TASK
var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default:""},
    completed: {type: Boolean, default: false}
}, { timestamps: true });
//TASK
//SCHEMAS

//MODEL
const Task = mongoose.model('Task', TaskSchema);
//MODEL
//STUFF TO EXPORT TO controller.js
module.exports = Task;
//STUFF TO EXPORT TO controller.js