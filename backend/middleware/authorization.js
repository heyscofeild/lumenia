//basicly when you try to login this files check if you token is legit or not

const jwt = require("jsonwebtoken");
require("dotenv").config();

//this file verifies the token
module.exports = async (req, res, next) => {
    try {
    
const jwtoken = req.header("token"); 

if (!jwtoken) {
    return res.status(403).json("not authorized");
}
//verify the token

const payload  = jwt.verify(jwtoken, process.env.secretjwt);

req.user = payload.user;
next();
} catch (err) {
    console.error(err.message);
    return res.status(403).json("aunothorized access ro7 tel3Ab b3id");
}
}