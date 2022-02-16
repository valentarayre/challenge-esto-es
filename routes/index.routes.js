const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')

const router = Router()
const docs = require('../docs')
const projects = require('./projects.routes')

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(docs))

router.use('/api/projects', projects)

module.exports = router
