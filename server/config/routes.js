var users=require("./../controllers/users");
var path = require("path");



module.exports=function(app){

        //DISPLAY DASHBOARD
        app.get("/get_users", users.get_users)
        //LOGIN
        app.post("/login", users.login)
        //LOGIN STATUS
        app.get("/check_status", users.check_status)
        //LOGOUT
        app.get("/logout", users.logout)


        //Create users
        app.post('/users', users.create)


        //to make angular routes work properly
        app.get("*", function(req, res){
            res.sendFile(path.resolve("client/index.html"))
        })




}
