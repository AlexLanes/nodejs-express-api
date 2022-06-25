"use strict"

import {Base64} from 'js-base64';
import * as db from '../database/postgres.js'

export async function authentication(request, response, next) {
    // Contains authentication
    let Authorization = request.get('Authorization')
    if( Authorization === null || Authorization === undefined ){
        return response.status(401).json({ message: 'No authentication detected' })        
    }
    // Type of authentication
    let [type, auth] = Authorization.split(' ')
    switch(type) {
        case 'Basic':
            let [username, password] = Base64.decode(auth).split(':')
            break
        case 'Bearer':
            console.log('Bearer')
            break
        default:
            return response.status(401).json({ message: 'Authentication not supported' })  
    }
    next()
}