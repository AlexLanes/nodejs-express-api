"use strict"

// Dependencys
import 'dotenv/config'
import {basic as existsAuth} from '../../authorization/exists.js'
import {basic as validAuth}  from '../../authorization/validate.js'

const RESOURCE = process.env.USER_RESOURCE

export function configure(app) {
    app.get(RESOURCE, existsAuth, validAuth, getUserName)
}

async function getUserName(request, response) {    
// Get from locals '../authorization/validate.basic()'
    let {user} = request.locals
    return response.status(200).json({ user: user })
}