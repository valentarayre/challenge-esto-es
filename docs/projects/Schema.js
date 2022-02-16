const id = {
  type: 'number',
  description: 'ID',
  example: '1'
}
const name = {
  type: 'string',
  description: 'Project name',
  example: 'new Prject'
}
const description = {
  type: 'string',
  description: 'Is description Test'
}

const proyectexample = [
  {
    id: 1,
    name: 'Test Description',
    description: 'Is description Test',
    managerId: 3,
    assignedId: 1,
    status: true,
    createdAt: '2022-02-16T17:12:43.000Z',
    updatedAt: '2022-02-16T17:12:58.000Z'
  }
]

const managerId = {
  type: 'number',
  example: '2'
}
const assignedId = {
  type: 'number',
  example: '2'
}
const status = {
  type: 'boolean',
  example: true
}

const createdAt = {
  type: 'string',
  example: '2022-02-07T11:05:33.000Z'
}
const updatedAt = {
  type: 'string',
  example: '2022-02-07T11:05:33.000Z'
}
module.exports = {
  createSchame: {
    type: 'object',
    properties: {
      id,
      name,
      description,
      managerId,
      assignedId,
      status,
      updatedAt,
      createdAt
    }
  },
  getPaginationList: {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id,
            name
          }
        },
        example: proyectexample
      },
      totalPages: {
        type: 'number',
        description: 'count of available pages',
        example: 1
      },
      previousPagesUrl: {
        oneOf: [
          {
            type: 'null',
            description: 'previous page does not exist',
            example: null
          },
          {
            type: 'string',
            description: 'url to previous page',
            example: 'http://localhost:3000/api/projects/?page=1'
          }
        ]
      },
      nexPagesUrl: {
        oneOf: [
          {
            type: 'string',
            description: 'url to next page',
            example: 'http://localhost:3000/api/projects/?page=2'
          },
          {
            type: 'null',
            description: 'next page does not exist',
            example: null
          }
        ]
      }

    }
  }
}
