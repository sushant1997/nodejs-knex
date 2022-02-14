const knex = require('knex')
const users = require('../models/user.model.js')
const bcrypt = require('bcrypt')


const postUsers = async(req, res)=>{
    try{
    const {username, email,Password, address} = req.body;
    const salt = await bcrypt.genSaltSync(10)
    const password = await bcrypt.hashSync(Password, salt);
    
    
    await users.create( username,email, password, address );
    res.send(`user added`)
    
    
    }catch(e){
        console.log(`user not added!`)
        console.log(e)
    }
}

const getUsers =async(req, res)=>{
   res.send(await users.getAll());
}

const getUser =async(req, res) =>{
    try{
    const {id} = req.params;
    res.send(await users.selectUser(id))
    }catch(e){
        console.log(`User not found!`)
        console.log(e)
    }
}


const updateData = async(req, res) =>{
    try{
    const {id} = req.params;
    const {username, address} = req.body;
    await users.updateUser(id, username, address)
    res.send(`User updated`)
    }catch(e){
        console.log(`Cannot update user`)
        console.log(e)
    }

}

const deleteUsers = async(req, res) =>{
    try{
    const {id} = req.params;
    await users.remove(id)
    res.send(`User deleted`)
    }catch(e){
        console.log(`User not deleted`)
        console.log(e)
    }
}

module.exports = {postUsers,getUsers, getUser, updateData,deleteUsers}