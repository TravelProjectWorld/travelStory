var mongoose = require('mongoose');

const StorySchema=new mongoose.Schema(
  {
    user:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    country: {type: String},
    title: { type: String},
    description: {type: String},
    url : {type : String},
  },
  {
    timestamps: true
  }
);

mongoose.model("Story", StorySchema);


