const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/auth-middleware");

//If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in repond with the correct status code and the message: 'You shall not pass!'.
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.send(err);
    });
});

module.exports = router;
