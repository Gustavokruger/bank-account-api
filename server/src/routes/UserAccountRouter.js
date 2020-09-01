const express = require('express');
const router = express.Router();
const UserAccountDAO = require('../DAOs/UserAccountDAO')

const route = '/user-account';
let userAccountDAO = new UserAccountDAO();

router.get(`${route}/:id`, (req, res) => {
    const { id } = req.params;
    let user = userAccountDAO.getUserAccount(id);
    if (!user) {
        res.json({ error: "usuario nao encontrado" })
    }

})

router.post(route, (req, res) => {
    const userAccount = req.body;
    return userAccountDAO.createUserAccount(userAccount)

})

router.put(`${route}/:id`, (req, res) => {

})

router.delete(`${route}/:id`, (req, res) => {

})

module.exports = router