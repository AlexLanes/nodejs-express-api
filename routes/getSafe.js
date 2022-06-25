"use strict"

import 'dotenv/config' // .env dependency

const RESOURCE = process.env.SAFE_RESOURCE

export function configure(app) {
    app.get(`${RESOURCE}`, getSafe)
}

async function getSafe(request, response) {
    response.send(`
        GET ${RESOURCE}
        ${request.params.id}
    `)
}