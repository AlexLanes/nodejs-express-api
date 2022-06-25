"use strict"
import 'dotenv/config' // .env dependency

const RESOURCE = process.env.CREDENTIALS_RESOURCE

export function configure(app) {
    app.post(RESOURCE, postCredentials)
}

async function postCredentials(request, response) {
    response.send(`POST ${RESOURCE}`)
}