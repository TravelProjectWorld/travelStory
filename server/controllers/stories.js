var mongoose=require("mongoose");
var Story= mongoose.model("Story")

module.exports={

  //Create story
  add_story: (req, res) => {
      console.log('STORY>>', req.body.url)
      console.log("USER IN SESSION", req.session.user)
      var new_story=new Story({
          user: req.session.user,
          country: req.body.country,
          title:req.body.title,
          description: req.body.description,
          url: req.body.url
         })
      new_story.save()
      .then(()=>{res.json(true)})
      .catch(err=>{
        console.log("Story add to database error!!", err);
        res.status(500).json(err);
      });
  },

    //get all stories.
  get_stories: (req, res)=>{
    Story.find({}).sort({createdAt:-1})
        .then (stories=>{res.json(stories)})
        .catch(err=>{
          console.log("Story get error", err);
          res.status(500).json(err)
        })
  },
    //get last 3 stories of the user in session.
  get_last_stories: (req, res)=>{
    console.log("USER IN SESSON INFO: ", req.session.user.user_id)
    Story.find({user: req.session.user}).sort({createdAt:-1})
        .then (stories=>{res.json(stories)})
        .catch(err=>{
          console.log("Story get error", err);
          res.status(500).json(err)
        })
  },

  

}
