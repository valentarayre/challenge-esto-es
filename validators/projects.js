const { body, param, validationResult } = require('express-validator')
const { existsUser, existsProyect } = require('../modules/dataExists')

const idIsValidUser = (value) => {
  return existsUser(value)
    .then(user => {
      if (!user) {
        return Promise.reject('Not Found Id User')
      }
    })
}
const idIsValidProyect = (value) => {
  return existsProyect(value)
    .then(user => {
      if (!user) {
        return Promise.reject('Not Found Proyect with Id')
      }
    })
}

const errors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

exports.createValidation = [
  body('name')
    .exists().withMessage('Name is required').bail()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('description')
    .exists().withMessage('Description is required').bail()
    .isString().withMessage('Description has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('assignedId')
    .exists().withMessage('You need to enter a Id!').bail()
    .isNumeric().withMessage('Invalid ID').bail()
    .custom(idIsValidUser).bail(),
  body('managerId')
    .exists().withMessage('You need to enter a ID!').bail()
    .isNumeric().withMessage('Invalid ID').bail()
    .custom(idIsValidUser).bail(),
  body('status')
    .notEmpty()
    .withMessage('You need to status!').bail()
    .isBoolean().withMessage('Must be a boolean true or false').bail(),
  errors
]

exports.exitsProjectValidation = [
  param('id')
    .exists().withMessage('You need to enter a Id!').bail()
    .isNumeric().withMessage('Invalid ID').bail()
    .custom(idIsValidProyect).bail(),
  errors
]

exports.updateValidation = [
  body('name')
    .optional()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('description')
    .optional()
    .isString().withMessage('Description has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('assignedId')
    .optional()
    .isNumeric().withMessage('Invalid ID').bail()
    .custom(idIsValidUser).bail(),
  body('managerId')
    .optional()
    .isNumeric().withMessage('Invalid ID').bail()
    .custom(idIsValidUser).bail(),
  body('status')
    .optional()
    .isBoolean().withMessage('Must be a boolean true or false').bail(),
  errors
]
