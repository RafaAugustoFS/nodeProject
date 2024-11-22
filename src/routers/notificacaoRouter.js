const { Router } = require('express');
const notificacaoController = require("../controllers/notificacaoController");

const router = Router();

router.post('/',  (req, res) =>{
    notificacaoController.create(req, res)
})

router.get('/',  (req, res) =>{
    notificacaoController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    notificacaoController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    notificacaoController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    notificacaoController.delete(req, res)
})

module.exports = router;