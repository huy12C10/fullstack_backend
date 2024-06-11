const connection = require('../config/database')
const {getAllUsers,updateUserByid,getUserByid,deleteUserByid} = require('../services/CRUDService');



const getHomepage = async (req,res) =>{

    let results =  await getAllUsers();
    return  res.render('home.ejs', {listUsers: results})
}
const getABC = (req,res) =>{
    res.send('check abc')
}
const getHuy = (req,res) =>{
    res.render('sample.ejs')
}

const getUpdatePage = async (req,res) =>{
    const userId  =req.params.id;
   
   let user = await getUserByid(userId);  
   
    res.render('edit.ejs',{userEdit : user})
}

const postCreateUser = async (req, res) => {
    console.log('>>>check req.body', req.body);

    const { email, name, city } = req.body;
    const [results] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );


    res.send('create user succeed!');
};
const postUpdateUser = async (req,res) =>{
    console.log('>>>check req.body',req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserByid(email,city,name,userId);
   
    res.send('Updated user succeed!')
}
const getCreatePage = (req,res) =>{
    res.render('create.ejs')
}

const postDeleteUser = async (req,res) =>{
        const userId  =req.params.id;
        let user = await getUserByid(userId);  

        res.render('delete.ejs', {userEdit : user})
}
const postHandleRemoveUser = async (req, res) => {
    const { userId } = req.body;

  
        await deleteUserByid(userId);
      
        res.redirect('/');
   
}

module.exports = {
    getHomepage,
    getABC,
    getHuy,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
   
}