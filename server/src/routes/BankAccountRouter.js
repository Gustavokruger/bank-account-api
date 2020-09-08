let express = require("express");
let router = express.Router();

const bankAccountDAO = require("../DAOs/BankAccountDAO");

const route = "/user_account/:id/bank_account";

router.get(`${route}/:id`, bankAccountDAO.getBankAccount);

router.post(`${route}/:id/get`, bankAccountDAO.get);

router.post(`${route}/:id/deposit`, bankAccountDAO.deposit);

module.exports = router;
