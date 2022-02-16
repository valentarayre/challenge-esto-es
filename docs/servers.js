const config = require('../config/config')

module.exports = {
  servers: [
    {
      url: 'https://agenciadigital123.herokuapp.com/',
      description: 'Heroku server'
    },
    {
      url: `http://localhost:${config.PORT}/`,
      description: 'Development server'
    }
  ]
}
