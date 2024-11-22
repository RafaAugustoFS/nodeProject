const { Router } = require('express');

const adminRouter = require('./adminRouter')
const clientRouter = require('./clienteRouter')
const contaRouter = require('./contaRouter')
const notificacaoRouter = require('./notificacaoRouter')
const transacaoRouter = require('./transacaoRouter')

const router = Router();

router.use('/admin', adminRouter);
router.use('/cliente', clientRouter);
router.use('/conta', contaRouter);
router.use('/notificacao', notificacaoRouter)
router.use('/transacao', transacaoRouter)

module.exports = router;