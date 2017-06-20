var mongoose=require('mongoose');
mongoose.Promise = global.Promise


const UserSchema=new mongoose.Schema({
      name: {type: String, minlength:[4, "Your name has to be at least 4 characters long!"], maxlength: [20, "Your name has to be maximum 20 characters long!"],  validate: {
              validator: function(v) {
                let reg= /^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$/;
                return reg.test(v);
              },
              message: '{VALUE} is not a valid  name!'
            },
            required: [true, "Please add a name! "]
          },
  },{timestamps: true});



mongoose.model("User", UserSchema);

var User=mongoose.model("User");
