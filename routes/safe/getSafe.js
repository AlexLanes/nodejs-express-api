"use strict"

// Dependencys
import 'dotenv/config'
import existsAuth from '../../authorization/exists.js'
import validAuth  from '../../authorization/validate.js'

const RESOURCE = process.env.SAFE_RESOURCE

export function configure(app) {
    app.get(RESOURCE, existsAuth, validAuth, getSafe)
}

async function getSafe(request, response) {
// Get from locals '../../authorization/exists.default()'
    let {token} = request.locals
    return response.status(200).json({ 
        message: token
    })
}