const db = require('../models')
const { Op } = require('sequelize')

const getAll = async (offset, limit) => {
  return await db.Projects.findAndCountAll({ offset, limit })
}

const getAllByName = async (offset, limit, name) => {
  return await db.Projects.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    },
    offset,
    limit
  })
}

const create = async (data) => {
  return await db.Projects.create(data)
}

const getById = async (id) => {
  return await db.Projects.findByPk(id)
}
const remove = async (id) => {
  await db.Projects.destroy({ where: { id } })
}

const update = async (id, data) => {
  return await db.Projects.update(data, { where: { id } })
}

module.exports = {
  getAll,
  create,
  remove,
  getById,
  update,
  getAllByName
}
