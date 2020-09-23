const express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors"),
  parseurl = require("parseurl");

let app = express(),
  session = require("express-session"),
  universalRoute = require("../routes/universal"),
  cataloguesRoute = require("../routes/catalogues"),
  // rutas = require("../rutas/ruta"),
  //   fileRoutes = require("../routes/files.routes"),
  //   courseRoutes = require("../routes/courses.routes"),
  //   userRoutes = require("../routes/users.routes"),
  //   roleRoutes = require("../routes/roles.routes"),
  sess = {
    //SESSION CONFIG
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    name: "sessionID",
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.TIME),
    },
  },
  corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//Cors configuration
app.use(cors(corsOptions));

//Session
app.use(session(sess));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Session examples to verificate
app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {};
  }
  let pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.get("/", (req, res) => {
  res.send(
    `Your session: ${req.sessionID}, number of visits: ${req.session.views["/"]} times`
  );
});

//Routes
app.use("/api", universalRoute);
app.use("/api", cataloguesRoute);

// app.use("/api", fileRoutes);
// app.use("/api", userRoutes);
// app.use("/api", courseRoutes);
// app.use("/api", roleRoutes);

module.exports = app;
