const knex = require('../knex.js');

const create = async(task_name, user_id)=>{
    await knex('tasks').insert({
        task_name,
        user_id
    })
}


const getAll = async()=>{
    const tasks = await knex.select().table('tasks')
    return tasks;
}


const selectTask = async(id)=>{
  const tasks =   await knex('tasks').where('task_id', id)
    return tasks;
}


const updateTask = async(id,task_name)=>{
    const tasks = await knex('tasks')
    .where('task_id',id)
    .update({
      task_name
      
    })
    return tasks;
}


const remove = async(id)=>{
    const tasks = await knex('tasks')
    .where('task_id', id)
    .del()
    return tasks;
}


module.exports = {create, getAll, selectTask, updateTask, remove}