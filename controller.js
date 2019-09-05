//BRINGS STUFF FROM models.js
const Task = require("./models");
//BRINGS STUFF FROM models.js
//STUFF TO EXPORT TO routes.js
module.exports = {
    
    // task 'dashboard'
    index: (request, response) => {
        Task.find()
            .then(t => {
                response.json({t});
            })
            .catch(err => response.json(err))
    },
    // task 'dashboard'
    //create task
    create: (request, response) => {
        Task.create(request.body) 
            .then(t =>{
                response.json({t});
            })
            .catch(err => response.json(err))
        },
        //create task
        //delete a task
    delete: (request, response) => {
        Task.remove({ _id: request.params._id }) 
            .then(t => {
                response.json({t});                
            })
            .catch(err => response.json(err))
        },
        //delete a task    
        //read 1 task
        view: (request, response) => {
            Task.findOne({ _id: request.params._id })
            .then(t => {
                response.json({t});                
            })
            .catch(err => response.json(err))
    },
    //read 1 task
    //update task
    update: (request, response) => {
        var title = request.body.title;
        var description = request.body.description;
        var completed = request.body.completed;
        var obj = {"title": title, "description": description, "completed" : completed};
        // Task.findByIdAndUpdate({_id: request.params._id},request.body)
        Task.update({_id: request.params._id},{$set: obj})
            .then(t => {
                response.json({t});                
            })
            .catch(err => response.json(err))
    }
    //update task    
}
//STUFF TO EXPORT TO routes.js