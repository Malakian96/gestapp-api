const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for GestApi',
        version: '0.0.1',
        description:
            'This is a REST API application made with Express. It retrieves data from GestApiDB.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'GestApi',
            url: '#',
        },
    },
    servers: [
        {
            url: 'http://localhost:8181/api',
            description: 'Development server',
        },
    ],
};
export const options = {
    swaggerDefinition: swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/controllers/*.ts', './src/models/*.ts', './src/dtos/*/*.ts'],
};