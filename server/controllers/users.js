var mongoose=require("mongoose");
var User=mongoose.model("User");

module.exports={


  //GET ALL USERS FROM DB
  get_users: (req, res)=>{
    User.find({}).sort({createdAt:-1})
        .then (users=>{res.json(users)})
        .catch(err=>{
          console.log("User get error", err);
          res.status(500).json(err)
        })
  },

  //login
  login:(req, res)=>{
    User.findOne({name: req.body.name})
        .catch(err =>{
          console.log("User findOne eror", err);
          response.status(500).json(err)
        })
        .then(user=>{
          if(user){
            console.log("Controller:", user);
            req.session.user=user
            res.json(true)
          }else{
            let new_user = new User(req.body)
            new_user.save()
                    .catch(err=>{
                      console.log("Cannot save user to db:", err);
                      res.status(500).json(err)
                    })
                    .then(()=>{
                      req.session.user=new_user
                      res.json(true)
                    })
            }
        })
  },

  //LOGIN STATUS
  check_status: (req,res)=>{
    console.log("HIT CHECK STATUS", req.session.user);
    res.json({user: req.session.user })
  },


  //LOGOUT
  logout: (req, res)=>{
    req.session.destroy()
    res.json(true)
  },







  }
