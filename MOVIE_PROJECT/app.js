var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
const axios = require('axios');
var request = require("request");
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/results",function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=";
   var key ="&apikey=6bc86861";

 
   url += query +key;
    request.get(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            //console.log(data['Search][0']['Title']);
            //res.send(data[0]);
            
            res.render("results.ejs",{data:data});
        }
        
    });
    
});
app.get("/",function(req,res){
    res.render("search.ejs");
    
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("MOVIE APP STARTED");
});


















