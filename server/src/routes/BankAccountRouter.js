const express = require('express');
const router = express.Router();

const route = '/user-account/:id/bank-account'

router.get(`${route}/:id`, (req, res) => {
    //chamar DAO de consulta de saldo
})

router.post(`${route}/:id/get`, (req, res) => {
    //chamar DAO de saque
})

router.post(`${route}/:id/deposit`, (req, res) => {
    //chamar DAO de deposito
})

module.exports = router