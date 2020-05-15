const User = require("../models/user");



 exports.update = async (req,res) => {

    const resp =  await User.updateOne({ "email": req.body.email },req.body);
    //console.log(resp.n)

    var query = User.find({ "email": req.body.email })
    query.exec(function (err, docs) {
        if(err){
            res.json({
                "error in update":"true"
            })
        }
        else{
            res.json({
                "updated":"true"
            })
        }
    }   
    );

 }

exports.Delete = (req,res) => {
    //console.log(req.body);
    User.deleteOne(req.body, function (err) {
        if(err){
            res.json({"error":"true"});
        }
        else
        {
            res.json({"delete":"true"});
        }
       
        
    });
    
}


exports.login = (req,res) => {

    const user =  {email:req.body.email,password:req.body.password};

    User.findOne(user, function (err, person) {
        if(err){
            res.json({
                "error in login":true
            })

        }
        else{
            if(person){
                res.json({
                    "user":"legal",
                    "firstname" : person.firstname,
                    "lastname":person.lastname,
                    "email":person.email

                })
            }
            else{
                res.json({
                    "user":"illegal"
                })
            }
        }
});
}

exports.register = (req,res) => {
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            res.json({
                registered:false
            })
        }
        else{
            res.json({
                "registered" : true
            });
        }
        
    })
}

exports.signout =  (req, res) => {
    res.json({
        message : "roshan!!/admin signed out!"
    });
}