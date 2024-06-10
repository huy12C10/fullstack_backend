const connection = require('../config/database')

const getHomepage = (req,res) =>{

    return  res.render('home.ejs')
}
const getABC = (req,res) =>{
    res.send('check abc')
}
const getHuy = (req,res) =>{
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) =>{
    console.log('>>>check req.body',req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
   
    // connection.query(
    //     `INSERT INTO Users (email,name,city)
    //      VALUES (? , ? , ?)`,
    //     [email,name,city],
    //     function(err, results) {

        
    //     res.send('create user succeed!')
    //     }
    //     );
        let [results,fields] = await  connection.query(
            `INSERT INTO Users (email,name,city) VALUES (? , ? , ?)`,[email,name,city],);
        console.log(">>>results= ",results);
        res.send('create user succeed!')


    // const [results,fields] = await connection.query('SELECT * FROM Users');
   

}

const getCreatePage = (req,res) =>{
    res.render('create.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getHuy,
    postCreateUser,
    getCreatePage
}