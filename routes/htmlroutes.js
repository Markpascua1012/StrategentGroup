var path = require("path");

module.exports = function (app) {
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/jobs", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/jobs.html"));
    });
    
    app.get("/services", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/services.html"));
    });


    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
