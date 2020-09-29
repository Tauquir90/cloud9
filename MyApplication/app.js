var express =   require("express");
var app = express();
 var friends = ["shabbar","tom","kamran","ashraf"];
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home");
    
});
app.get("/friends",function(req,res){
   
    res.render("friends",{friends,friends});
    
});
app.post("/addfriend",function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
    
});

app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("server started");
});










