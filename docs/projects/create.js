const schema = require('./Schema')

module.exports = {
  post: {
    tags: ['Projects'],
    description: 'New Projects',
    operationId: 'newProjects',
    responses: {
      200: {
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
