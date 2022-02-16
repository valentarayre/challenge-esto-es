'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Projects.belongsTo(models.Users, {
        foreignKey: 'managerId'
      })
      Projects.belongsTo(models.Users, {
        foreignKey: 'assignedId'
      })
    }
  }
  Projects.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    managerId: DataTypes.INTEGER,
    assignedId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Projects'
  })
  return Projects
}
