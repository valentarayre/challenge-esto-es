const getAll = require('./getAll')
const create = require('./create')
const getById = require('./getById')
const update = require('./update')
const detele = require('./delete')

module.exports = {
  '/api/projects': {
    ...getAll,
    ...create
  },
  '/api/projects/{id}': {
    ...getById,
    ...update,
    ...detele
  }
}
