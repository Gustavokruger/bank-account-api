const express = require('express');
const router = express.Router();
const userAccount = require('../models/useraccount')

const route = '/user-account';

router.get(route, (req, res) => {

})

router.post(route, (req, res) => {

})

router.put(`${route}/:id`, (req, res) => {

})

router.delete(`${route}/:id`, (req, res) => {

})

module.exports = router