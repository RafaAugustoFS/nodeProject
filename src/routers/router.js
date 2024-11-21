const { Router } = require('express');

const adminRouter = require('./adminRouter')
const clientRouter = require('./clienteRouter')
const contaRouter = require('./contaRouter')

const router = Router();

router.use('/admin', adminRouter);
router.use('/cliente', clientRouter)
router.use('/conta', contaRouter)

module.exports = router;