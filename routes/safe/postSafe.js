"use strict"

import 'dotenv/config' // .env dependency

const RESOURCE = process.env.SAFE_RESOURCE

export function configure(app) {
    app.post(`${RESOURCE}`, postSafe)
}

async function postSafe(request, response) {
    response.send(`
        GET ${RESOURCE}
        ${request.params.id}
    `)
}