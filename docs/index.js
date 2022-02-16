const tags = require('./tags')
const basicInfo = require('./basicInfo')
const components = require('./components')
const servers = require('./servers')
const projects = require('./projects/index')

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...projects
  }
}
