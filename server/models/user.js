var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const UserSchema=new mongoose.Schema(
  {
    user_id: { type : String},
    name: { type: String},
    nickname: {type: String},
    given_name: {type: String},
    family_name : {type: String},
    gender: {type: String},
    picture : {type : String},
  },
  {
    timestamps: true
  }
);
mongoose.model("User", UserSchema);
