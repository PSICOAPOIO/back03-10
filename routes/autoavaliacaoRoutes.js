const express = require('express')
const router = express.Router()

const AutoavaliacaoController = require('../controllers/AutoavaliacaoController')

router.get('/autoavaliacao', AutoavaliacaoController.autoavaliacao)
router.get('/', AutoavaliacaoController.showAutoavaliacao)

router.get('/testeAnsiedade', AutoavaliacaoController.testeAnsiedade)
router.get('/', AutoavaliacaoController.showTesteAnsiedade)

module.exports = router