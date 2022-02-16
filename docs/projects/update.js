const schema = require('./Schema')

module.exports = {
  post: {
    tags: ['Projects'],
    description: 'Update Projects',
    operationId: 'updateProjects',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'number',
          example: 1
        },
        required: true,
        description: 'Id to Project'
      }
    ],
    responses: {
      200: {
        description: 'Update a selected Project',
        content: {
          'application/json': {
            schema: schema.createSchame
          }
        }
      },
      400: {
        $ref: '#/components/responses/BadRequest'
      }
    }
  }
}
