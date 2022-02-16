const schema = require('./Schema')

module.exports = {
  get: {
    tags: ['Projects'],
    description: 'Get Projects for Id',
    operationId: 'getByIdProjects',
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
        description: 'Get a selected Project',
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
