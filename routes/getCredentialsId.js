"use strict"
import 'dotenv/config' // .env dependency

const RESOURCE = process.env.CREDENTIALS_RESOURCE

export function configure(app) {
    app.get(`${RESOURCE}/:id`, getCredentialsId)
}

async function getCredentialsId(request, response) {
    response.send(`
        GET ${RESOURCE}
        ${request.params.id}
    `)
}