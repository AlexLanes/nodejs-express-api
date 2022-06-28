"use strict"

// Dependencys
import 'dotenv/config'
import {basic as existsAuth} from '../../authorization/exists.js'
import {basic as validAuth}  from '../../authorization/validate.js'
import updateToken           from '../../authorization/update.js'

const PORT     = process.env.PORT
const RESOURCE = process.env.USER_RESOURCE

export function configure(app) {
    app.patch(RESOURCE, existsAuth, validAuth, updateToken, patchUser)
}

async function patchUser(request, response) {
    let protocol = request.protocol
    let hostname = request.hostname
    return response.status(200).json({
        message: 'Token successfully updated' ,
        next: `GET ${protocol}://${hostname}:${PORT}${RESOURCE}`
    })
}