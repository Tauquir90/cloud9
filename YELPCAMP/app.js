var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var campgrounds = [{name:"SPAIN 6",image:"https://cf.bstatic.com/data/xphoto/1182x887/443/44366236.jpg?size=S"},


{name:"STATE PARK",image:"https://news.wttw.com/sites/default/files/styles/full/public/field/image/CampingKelleCruzFlickrCrop.jpg?itok=MViTDefw"},
  {name:"VOLCANIC PARK",image:"https://www.nps.gov/lavo/planyourvisit/images/southwest-campground_6081614_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false"}  ];
  
app.get("/",function(req,res){
    res.render("landing");
    
});
app.get("/campgrounds",function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds});
    
    app.post("/campgrounds",function(req,res){
        var name = req.body.name;
        var image = req.body.image;
        var newCampground = {name:name,image:image};
        campgrounds.push(newCampground);
        res.redirect("/campgrounds");
        
    });
    app.get("/campgrounds/new",function(req,res){
        res.render("new.ejs");
        
    });
    
    
});


app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("Yelpcamp server started");
    
    
});



