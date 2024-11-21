const { Router } = require('express');
const contaController = require("../controllers/contaController");

const router = Router();

router.post('/',  (req, res) =>{
    contaController.create(req, res)
})

router.get('/',  (req, res) =>{
    contaController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    contaController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    contaController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    contaController.delete(req, res)
})

module.exports = router;