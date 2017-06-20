var mongoose = require('mongoose');

const StorySchema=new mongoose.Schema(
  {
    user:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: { type: String},
    description: {type: String},
    picture : {type : String},
  },
  {
    timestamps: true
  }
);

mongoose.model("Story", StorySchema);

