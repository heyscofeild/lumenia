const router = require('express').Router();
const pool = require('./database/db') 
const bcrypt = require('bcrypt'); 
const jwtgenerator = require('./utils/generatorjwt'); 

//register user controller

const reguser= async (req, res) => {
try {
    const { username, email, password } = req.body;
    
    //does the user exist
    const user = await pool.query('SELECT * FROM users WHERE user_name = $1 OR user_email   = $2'
     , [username, email]);
    // user kayen
     if (user.rows.length > 0) {
        return res.status(401).send("User already exists" );
    };

    // bycrypting the password
    const saltround = 10;
    const salt = await bcrypt.genSalt(saltround);

    const cryptpassword = await bcrypt.hash(password, salt);

    //inserting the user into db

    const newuser = await pool.query
    ('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, cryptpassword]);
        


    //generating our jwt token
    const token = jwtgenerator(newuser.rows[0].user_id);
    res.json({token});
   
} catch (error) {
    console.error(error)
    res.status(500).send("server error");
}


};
//here is the login controller
const loguser = async (req, res) => {
try {
    const {  email, password } = req.body;

    const user = await pool.query(
        'SELECT * FROM users WHERE user_email = $1 '
        , [email]);
    // user kayen
    if (user.rows.length === 0) {
        return res.status(401).json("User does not exist");
    }
    //checking the password

    const validpassword = await bcrypt.compare(password, user.rows[0].user_password);

    if (!validpassword) {
        return res.status(401).json("Invalid password");
    }

    //jwt token

    const token = jwtgenerator(user.rows[0].user_id);
    res.json({token});
    

    
} catch (err) {
    console.error(err);
    res.status(500).send("server error");  
}
}
const isverified = async (req, res) => {
try {
res.json(true);




    
} catch (err) {
    console.error(err);
    res.status(500).send("server error");
}




}

module.exports =  {reguser,loguser,isverified} ;