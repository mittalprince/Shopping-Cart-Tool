const dotenv = require('dotenv').config();

var express = require("express")
var path = require("path")
var favicon = require("serve-favicon")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var bodyParser = require("body-parser")
var expressHbs = require("express-handlebars")
var mongoose = require("mongoose")
var session = require("express-session")
var passport = require("passport")
var flash = require("connect-flash")
var validator = require("express-validator")
var MongoStore = require("connect-mongo")(session)

var routes = require("./routes/index")
var userRoutes = require("./routes/users")

var app = express()

const mongo_uri = process.env.mongo_uri;
const connect = mongoose.connect(mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true});
connect.then((db)=>{
    console.log("Database Connected Successfully");
}, (err)=>{
    console.log("Error occur while connecting ", err);
})

require("./config/passport")

// view engine setup
app.engine(".hbs", expressHbs({ defaultLayout: "layout", extname: ".hbs" }))
app.set("view engine", ".hbs")

app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator())
app.use(cookieParser())


app.use(
  session({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
)

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, "public")))

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated()
  res.locals.session = req.session
  next()
})

app.use("/user", userRoutes)
app.use("/", routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handlers -------------------

// development error handler
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render("error", {
      message: err.message,
      error: err
    })
  })
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render("error", {
    message: err.message,
    error: {}
  })
})

module.exports = app
