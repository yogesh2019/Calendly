const express = require('express');
const app = express();
const connectDb = require('./config/db')
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 2000;
const spec = swaggerJsDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Calendly demo',
            version: '1.0.0',
            description: 'app to schedule meetings based on availability',
        },
        servers: [
            { URL: process.env.PORT }
        ]
    },
    apis: [".routes/*.js"]

});



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
app.listen(PORT, () => {
    console.log("server is running");
})