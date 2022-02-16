const schema = require('./Schema')

module.exports = {
  delete: {
    tags: ['Projects'],
    description: 'Delete Projects',
    operationId: 'deleteProjects',
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
        description: 'Delete a selected Project',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'Project 1 removed succesfully'
                }
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/responses/BadRequest'
      }
    }
  }
}
