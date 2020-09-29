var express = require("express");
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": " EM7C6Ef6"
};


 var request = new OAuth.OAuth(
    null,
    null,
     'dj0yJmk9MFZKTWowWEIxOTF1JmQ9WVdrOVJVMDNRelpGWmpZbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY3',
    '8186bb4c7b4f2c53ed182a20c4bffd3839f3cc4a',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=kolkata,india&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
           console.log(typeof result);
            var parseData = JSON.parse(data);
            console.log(parseData);
            console.log(parseData['location']['city']);
            console.log(parseData['current_observation']['astronomy']['sunset']);
            
            
            
        }
        
    }
);









   
        
        
        
        
        
        
        
        
        
        
        




















