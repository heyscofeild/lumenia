const jwt = require('jsonwebtoken');
require('dotenv').config(); //our secret is there

function jwtgenerator (user_id){
    const payload = {
        user : user_id  //creating a token that stays for 1 houre
    }
     return jwt.sign(payload, process.env.secretjwt, {expiresIn: "1hr" });

       
}
module.exports = jwtgenerator;