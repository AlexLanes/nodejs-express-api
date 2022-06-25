"use strict"

// Dependencys
import 'dotenv/config'
import {authentication} from '../validation/authentication.js'
import * as db from '../database/postgres.js'

const RESOURCE = process.env.CREDENTIALS_RESOURCE

export function configure(app) {
    app.get(RESOURCE, authentication, getCredential)
}

async function getCredential(request, response) {

    response.status(200).json({ message: 'OK' })
    return
}