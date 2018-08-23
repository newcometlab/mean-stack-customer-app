var User = require("../models/user");

module.exports = (router) => {

    // first POST request [http://localhost:8080/api/users]
    router.post("/users", (req, res) => {
        const user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        if (req.body.username == null || req.body.username == ""
            || req.body.password == null || req.body.password == ""
            || req.body.email == null || req.body.email == "")
        {
            res.send("Validation Error: Please ensure that username, password and email have been provided")
        } else {
            user.save((error) => {
                if (error) {
                    res.send("The system returned the following error: "+error);
                } else {
                    res.send("User: "+ user +" successfully created");
                }
            });
        }
    });

    return router;
};

