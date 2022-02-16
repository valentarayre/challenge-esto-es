const schema = require('./Schema')

module.exports = {
  post: {
    tags: ['Projects'],
    description: 'New Projects',
    operationId: 'newProjects',
    requestBody: {
      content: {
        'application/json': {
          schema: schema.postSchame
        }
      }
    },
    responses: {
      201: {
        description: 'Create a Proyect',
        content: {
          'application/json': {
            schema: schema.createSchame
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationError'
      }
    }
  }
}
