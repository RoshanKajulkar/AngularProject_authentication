var express = require('express')
var router = express.Router()
const {signout,update,Delete,register,login} = require("../controllers/auth");

router.post('/register',register);
router.post('/login',login);
router.post('/delete',Delete);
router.post('/update',update);
//router.get('/logout', signout);

module.exports = router