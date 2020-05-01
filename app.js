var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    flash         = require("connect-flash"),
    methodOverride = require("method-override"),
    LocalStrategy = require("passport-local"),
    Comment       = require("./models/comment"),
    Campground    = require("./models/campground"),
    User          = require("./models/user.js"),
    seedDB        = require("./seeds")

var commentRoutes    = require("./routs/comments"),
    campgroundRoutes = require("./routs/campgrounds"),
    indexRoutes      = require("./routs/index")

mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

app.use(require("express-session")({
    secret:"once again cat are wins",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.locals.moment = require('moment');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.get("/",function(req,res){
    res.render("landing");
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
   

app.listen(3000,function(req,res){
    console.log("server started");
});
