module.exports = function (req, res, next) {
    const { username, email, password } = req.body;
    //checking if the username is empty
    
  function validEmail(userEmail) { //to validate  the email format
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

    if (req.path === "/register") {  //validate the credentials in register
        if (![email, password, username].every(Boolean)) {
            return res.status(401).json("missing credentials");
        }else if (!validEmail(email)) { //check if the email have a valid format
            return res.status(401).json("invalid email");   
        }
    }
    else if (req.path === "/login") { //validate cfedentials in login
        if (![email, password].every(Boolean)) {
            return res.status(401).json("missing credentials");
        }else if (!validEmail(email)) {
            return res.status(401).json("invalid email");   
        }
    }
    next();
}