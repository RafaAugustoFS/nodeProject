const { Router } = require('express');
const adminController = require("../controllers/adminController");

const router = Router();

router.post('/',  (req, res) =>{
    adminController.create(req, res)
})

module.exports = Router;