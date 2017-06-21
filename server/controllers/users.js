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

  //Create users
  create: (req, res) => {
    User.findOne({user_id : req.body.user_id })
      .catch(err => {
            console.log("User findOne eror", err);
            res.status(500).json(err)
          })
          .then (user => {
            if (user) {
              console.log("Controller:", user);
              req.session.user=user
              res.json(true)
            } else {
              let newUser = new User(req.body)
              newUser.save()
                      .catch(err => {
                        console.log("Cannot save user to db:", err);
                        res.status(500).json(err)
                      })
                      .then(() => {
                        req.session.user=newUser
                        res.json(true)
                      })
              }
          })
  },

  //LOGOUT
  logout: (req, res)=>{
    req.session.destroy()
    res.json(true)
  }







  }
