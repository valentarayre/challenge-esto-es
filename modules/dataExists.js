const projectsRepository = require('../repositories/projects')
const usersRepository = require('../repositories/users')

const existsProyect = async (id) => {
  const Proyect = await projectsRepository.getById(id)
  return !!Proyect
}
const existsUser = async (id) => {
  const user = await usersRepository.getById(id)
  return !!user
}

module.exports = {
  existsUser,
  existsProyect
}
