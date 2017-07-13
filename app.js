var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Rainer", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
        {name: "Granite Hill", image: "https://farm6.staticflickr.com/5694/21041875770_ffea6404d0.jpg"},
        {name: "Falls", image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg"}
    ]

    res.render("campgrounds",{campgrounds:campgrounds});

});


app.listen(process.env.PORT || '3000', process.env.IP, function(){
    console.log ("YelpCamp Server Has Started"); 
}); 