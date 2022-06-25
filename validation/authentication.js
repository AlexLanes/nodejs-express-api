"use strict"

import {Base64} from 'js-base64'
import AES from 'crypto-js/aes.js'
import Utf8 from 'crypto-js/enc-utf8.js'
import * as db from '../database/postgres.js'

export async function authentication(request, response, next) {
    // Contains authentication
    let Authorization = request.get('Authorization')
    if( Authorization === null || Authorization === undefined ){
        return response.status(401).json({ message: 'No authentication detected' })        
    }
    // Type of authentication
    let [type, auth] = Authorization.split(' ')
    let username, password
    switch(type) {
        case 'Basic':
            [username, password] = Base64.decode(auth).split(':')
            let encrypted = AES.encrypt(password, process.env.AES_SALT).toString()
            console.log(encrypted)
            let decrypted = AES.decrypt(encrypted, process.env.AES_SALT).toString(Utf8)
            console.log(decrypted)
            break
        case 'Bearer':
            [username, token] = Base64.decode(auth).split(':')
            break
        default:
            return response.status(401).json({ message: 'Authentication not supported' })  
    }
    next()
}