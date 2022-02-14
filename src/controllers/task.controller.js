const knex = require('knex')
const tasks = require('../models/task.model.js')


const postTask = async(req, res)=>{
    try{
    const {task_name, user_id} = req.body;
    await tasks.create( task_name, user_id );
    res.send(`Task added`)
    }catch(e){
        console.log(e)
    }
}

const getTasks =async(req, res)=>{
    res.send(await tasks.getAll());
 }


 const getTask =async(req, res) =>{
    try{
    const {id} = req.params;
    res.send(await tasks.selectTask(id))
    }catch(e){
        console.log(e)
    }
}


const updateData = async(req, res) =>{
    try{
    const {id} = req.params;
    const {task_name} = req.body;
    await tasks.updateTask(id, task_name)
    res.send(`Task updated`)
    }catch(e){
        
        console.log(e)
    }

}

const deleteTasks = async(req, res) =>{
    try{
    const {id} = req.params;
    await tasks.remove(id)
    res.send(`Task deleted`)
    }catch(e){
        
        console.log(e)
    }
}


module.exports = {postTask, getTasks, getTask, updateData,deleteTasks}