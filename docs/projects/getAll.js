const schema = require('./Schema')

module.exports = {
  get: {
    tags: ['Projects'],
    description: 'Get list of Projects paginated',
    operationId: 'getProjects',
    parameters: [
      {
        name: 'page',
        in: 'query',
        schema: {
          type: 'number',
          example: 1
        },
        description: 'Number of the page'
      },
      {
        name: 'name',
        in: 'query',
        schema: {
          type: 'name',
          example: 'test'
        },
        description: 'Name to search'
      }
    ],
    responses: {
      200: {
        description: 'List of news with pagination data (Multiple schemas)',
        content: {
          'application/json': {
            schema: schema.getPaginationList
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationErrorPaginate'
      }
    }
  }
}
