var express = require("express");
var router = express.Router();
const userAccountDAO = require("../DAOs/UserAccountDAO");

const route = "/user_account";

router.get(`${route}/:id`, userAccountDAO.getUserAccount);

router.post(route, userAccountDAO.createUserAccount);

router.put(`${route}/:id`, userAccountDAO.updateUserAccount);

router.delete(`${route}/:id`, userAccountDAO.deleteUserAccount);

module.exports = router;
