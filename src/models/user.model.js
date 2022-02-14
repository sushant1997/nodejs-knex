const knex = require('../knex.js');

const create = async(username, email, password, address)=>{
    await knex('users').insert({
        username,
        email,
        Password:password,
        address
    })
}

// const getAll = async()=>{
//     const users = await knex.select().table('users')
//     return users;
// }


const getAll = async()=>{
        const users = knex('users')
        .join('tasks', 'users.user_id', 'tasks.user_id')
        .select('users.user_id', 'users.username', 'users.email', 'users.address' ,'tasks.task_name')
        return users;
    }


const selectUser = async(id)=>{
  const users =   await knex('users').where('user_id', id)
    return users;
}


const updateUser = async(id,username,address)=>{
    const users = await knex('users')
    .where('user_id',id)
    .update({
      username,
      address
    })
    return users;
}


const remove = async(id)=>{
    const users = await knex('users')
    .where('user_id', id)
    .del()
    return users
}



module.exports ={create, getAll, selectUser, updateUser, remove};