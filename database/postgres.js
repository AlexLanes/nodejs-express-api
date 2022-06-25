"use strict"

import sql from './connection.js'

var select;

export async function getUsers(){
    select = await sql`
      select
        *
      from teste
    `
    return select
}