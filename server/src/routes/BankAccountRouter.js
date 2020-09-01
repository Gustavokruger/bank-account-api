const express = require('express');
const router = express.Router();

const bankAccountDAO = require('./DAOs/BankAccountDAO')

const route = '/user-account/:id/bank-account'

router.get(`${route}/:id`, (req, res) => {
    const { id } = req.params;
    let bankAccount = bankAccountDAO.getBankAccount(id);

    if (!bankAccount) {
        return res.status(400).json({ error: "bankAccount not found" })
    }
    return res.status(200).json(bankAccount)
})

router.post(`${route}/:id/get`, async (req, res) => {
    const { value } = req.body;

    let response = await bankAccountDAO.get(value);

    if (response < 0) {
        return res.status(400).json({ error: "saldo insuficiente" })
    }
    return res.status(400).json(response)
})

router.post(`${route}/:id/deposit`, async (req, res) => {

    const { value } = req.body;

    return await bankAccountDAO.deposit(value).then(() => res.status(200).json({ message: `depositados R$:${value}` }));

})

module.exports = router