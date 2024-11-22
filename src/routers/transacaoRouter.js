const { Router } = require('express');
const transacaoController = require("../controllers/transacaoController");

const router = Router();

router.post('/',  (req, res) =>{
    transacaoController.create(req, res)
})

router.get('/',  (req, res) =>{
    transacaoController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    transacaoController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    transacaoController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    transacaoController.delete(req, res)
})

module.exports = router;