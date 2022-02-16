const config = require('../config/config')

module.exports = {
  servers: [
    {
      url: `http://localhost:${config.PORT}/`,
      description: 'Development server'
    },
    {
      url: 'https://agenciadigital123.herokuapp.com/',
      description: 'Development server'
    }
  ]
}
