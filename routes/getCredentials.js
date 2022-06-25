"use strict"
import 'dotenv/config' // .env dependency
import * as db from '../database/operations.js'

const RESOURCE = process.env.CREDENTIALS_RESOURCE

export function configure(app) {
    app.get(RESOURCE, getCredentials)
}

async function getCredentials(request, response) {
    let select = await db.getUsers()
    console.log(select)
    response.send(`
        GET ${RESOURCE}
    `)
}