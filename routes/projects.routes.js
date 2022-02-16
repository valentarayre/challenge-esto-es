const { Router } = require('express')
const router = Router()

const projectsController = require('../controllers/projects')
const { createValidation, exitsProjectValidation, updateValidation } = require('../validators/projects')

router.get('/', projectsController.getAll)
router.get('/:id', exitsProjectValidation, projectsController.getById)
router.post('/:id', exitsProjectValidation, updateValidation, projectsController.update)
router.post('/', createValidation, projectsController.create)
router.delete('/:id', exitsProjectValidation, projectsController.remove)

module.exports = router
