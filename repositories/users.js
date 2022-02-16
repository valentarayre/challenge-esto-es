const db = require('../models')

const getById = async (id) => {
  return await db.Users.findByPk(id)
}

module.exports = {
  getById
}
