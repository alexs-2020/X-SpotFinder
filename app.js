// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));


// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", isAuthenticated, allRoutes);

const userRoute = require("./routes/user.routes");
app.use("/api", isAuthenticated, userRoute);

const postsRouter = require('./routes/posts.routes');     // <== IMPORT
app.use('/api', isAuthenticated, postsRouter); 

const locationRouter = require('./routes/locations.routes');  
app.use('/api', isAuthenticated, locationRouter); 

const authRouter = require("./routes/auth.routes");          //  <== IMPORT
app.use("/auth", authRouter);   



         


app.use((req, res) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/client/build/index.html");
  });
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes

require("./error-handling")(app);

module.exports = app;






