const projectsRepository = require('../repositories/projects')
const { paginate } = require('../modules/paginations')

const getAll = async (req) => {
  const reqName = req.query.name || false
  if (!reqName) return await paginate(projectsRepository.getAll, req, 10)
  return await paginate(projectsRepository.getAllByName, req, 10, reqName)
}

const create = async (req) => {
  return await projectsRepository.create(req)
}

const remove = async (id) => {
  return await projectsRepository.remove(id)
}
const getById = async (id) => {
  return await projectsRepository.getById(id)
}

const update = async (id, data) => {
  await projectsRepository.update(id, data)
  return await projectsRepository.getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
