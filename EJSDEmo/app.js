var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("home.ejs");
    
});
app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar:thing});
});
app.get("/posts",function(req,res){
    var posts = [
        {title:"shabbar is studying",author:"shabbar"},
        {title:"shabbar is studying python",author:"shabbar"},
        {title:"shabbar is studying javascript",author:"shabbar"}
        ];
        res.render("posts.ejs",{posts,posts});
    
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is listening");
});



