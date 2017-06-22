var users=require("./../controllers/users");
var stories=require("./../controllers/stories");

var path = require("path");



module.exports=function(app){

        //DISPLAY DASHBOARD
        app.get("/get_users", users.get_users)
        //Create users
        app.post('/users', users.create)
        //Logout to destroy session
        app.post('/logout', users.logout)
        //Create story
        app.post("/add_story", stories.add_story)
        //Get all stories
        app.get("/get_stories", stories.get_stories)
        //Get last 3  stories
        app.get("/get_last_stories", stories.get_last_stories)


        //to make angular routes work properly
        app.get("*", function(req, res){
            res.sendFile(path.resolve("client/index.html"))
        })




}
