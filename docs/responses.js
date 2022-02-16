module.exports = {
  responses: {
    Removed: {
      description: 'Resource removed',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              msg: {
                type: 'string',
                example: 'Entity removed succesfully'
              }
            }
          }
        }
      }
    },
    ValidationError: {
      description: 'Validation Error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ValidationError'
          }
        }
      }
    },
    ValidationErrorPaginate: {
      description: 'Validation Error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ValidationErrorPaginate'
          }
        }
      }
    },
    BadRequest: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              value: {
                description: 'value provided',
                example: 4
              },
              msg: {
                type: 'string',
                example: 'Not Found Proyect with Id'
              },
              param: {
                type: 'string',
                example: 'id'
              },
              location: {
                type: 'string',
                example: 'params'
              }
            }
          }
        }
      }
    },
    ValidationOrBadRequest: {
      description: 'Validation Error or Bad Request (Multiple schemas)',
      content: {
        'application/json': {
          schema: {
            oneOf: [
              { $ref: '#/components/schemas/ValidationError' },
              { $ref: '#/components/schemas/BadRequest' }
            ]
          }
        }
      }
    },
    Forbidden: {
      description: 'Forbidden resource',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Role admin required'
              }
            }
          }
        }
      }
    },
    NotFound: {
      description: 'Resource Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                description: '',
                example: 'Resource with id 1 not found'
              }
            }
          }
        }
      }
    },
    InternalServerError: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                description: '',
                example: 'Error uploading the image'
              }
            }
          }
        }
      }
    }
  }
}
