const responses = require('./responses')

module.exports = {
  components: {
    schemas: {
      ValidationError: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                value: {
                  description: 'value provided',
                  example: 4
                },
                msg: {
                  type: 'string',
                  example: 'must be a string'
                },
                param: {
                  type: 'string',
                  example: 'name'
                },
                location: {
                  type: 'string',
                  example: 'body'
                }
              }
            }
          }
        }
      },
      ValidationErrorPaginate: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                value: {
                  description: 'value provided',
                  example: 5
                },
                msg: {
                  type: 'string',
                  example: 'the page does not exist'
                },
                param: {
                  type: 'string',
                  example: 'page'
                },
                location: {
                  type: 'string',
                  example: 'body'
                }
              }
            }
          }
        }
      },
      BadRequest: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            example: 'Related entity with id not found. Not updated'
          }
        }
      }
    },
    ...responses
  }
}
