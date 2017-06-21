var mongoose = require('mongoose');

const StorySchema=new mongoose.Schema(
  {
    user:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    country: {type: String, required:[true, "Please select a country."], minlength: [1, "Please select a country."]},
    title: { type: String, required:[true, "Please add a title."], minlength: [4, "Title needs to be at least 4 characters long."], maxlength:[20, "Title can`t be longer than 20 characters."]},
    description: {type: String, required:[true, "Please add description."], minlength:[10, "Description needs to be at least 10 characters long."], maxlength:[2000, "Description can have more than 2000 characters."]},
    url : {type : String, required: [true, "Please add image url."]},
  },
  {
    timestamps: true
  }
);

mongoose.model("Story", StorySchema);


