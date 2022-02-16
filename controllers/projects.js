const projectsService = require('../services/projects')

const getAll = async (req, res, next) => {
  try {
    const data = await projectsService.getAll(req)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await projectsService.create(req.body)
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    await projectsService.remove(req.params.id)
    res.status(200).json({ msg: `Paginate ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}
const getById = async (req, res, next) => {
  try {
    const data = await projectsService.getById(req.params.id)
    res.status(200).json({ data })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const data = await projectsService.update(req.params.id, req.body)
    res.status(200).json({ msg: `The member ${req.params.id} was updated succesfully`, data })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
