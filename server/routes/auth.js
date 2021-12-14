var express = require('express');
var router = express.Router();
var User = require('../models/user');

// LOGIN - login/get user
router.post('/login', function(req, res, next) {
  res.status(200).json();
});

// REGISTER - create new user
router.post('/register',async function(req, res, next) {
    try {
        const {email, password, username} = req.body;
        if(!(email && password && username)){
            res.status(400).send("Missing Required Input");
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        //Encrypt user password
        //var encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: username,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: password,
        });
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
        });
        user.token = token;
        res.status(201).json({token: user.token});
    }
    catch (err) {
        console.log(err)
    }
  res.status(200).json();
});

// LOGOUT - logout the current user
router.post('/logout', function(req, res, next) {
  res.status(200).json();
});

module.exports = router;