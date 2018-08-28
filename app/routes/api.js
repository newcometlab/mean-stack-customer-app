var User = require("../models/user");

module.exports = (router) => {

    // first POST request [http://localhost:8080/api/users]
    router.post("/users", (req, res) => {
        console.log("REQUEST BODY: "+req.body);
        const user = new User();
        user.idNumber = req.body.idNumber;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phoneNumber = req.body.phoneNumber;

        console.log(user);

        if (req.body.idNumber == null || req.body.idNumber == ""
            || req.body.firstName == null || req.body.firstName == ""
            || req.body.lastName == null || req.body.lastName == ""
            || req.body.email == null || req.body.email == ""
            || req.body.phoneNumber == null || req.body.phoneNumber == "")
        {
            console.log("HIT IF statement");
            res.send("Validation Error: Please ensure that all fields have been provided");
            res.json({ success: false, message: "Validation Error: Please ensure that all fields have been provided" })
        } else {
            console.log("HIT ELSE statement");
            user.save((error) => {
                if (error) {
                    console.log("HIT ERROR statement"+error);
                    res.json({ success: false, message: "The system returned the following error: "+error});
                } else {
                    console.log("HIT USER CREATED statement");
                    res.json({ success: true, message: "User: "+ user +" successfully created" });
                }
            });
        }
    });

    return router;
};

