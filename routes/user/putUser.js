"use strict"

// Dependencys
import 'dotenv/config'
import {basic as existsAuth} from '../../authorization/exists.js'
import createAuth from '../../authorization/create.js'

const PORT = process.env.PORT
const RESOURCE = process.env.USER_RESOURCE

export function configure(app) {
    app.put(RESOURCE, existsAuth, createAuth, putUser)
}

async function putUser(request, response) {
    return response.status(201).json({
        message: 'User successfully created',
        next: `GET ${request.protocol}://${request.hostname}:${PORT}${RESOURCE}`
    })
}