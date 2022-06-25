"use strict"

import postgres from 'postgres' // npm postgres connector
import 'dotenv/config'          // .env dependency

const DATABASE = process.env.DATABASE.split(',')

const SQL =
    postgres({
        host    : DATABASE[0],  // Postgres ip address[s] or domain name[s]
        port    : DATABASE[1],  // Postgres server port[s]
        database: DATABASE[2],  // Name of database to connect to
        username: DATABASE[3],  // Username of database user
        password: DATABASE[4],  // Password of database user
        onnotice: (notice) => { // Log notice message
            console.log(`### Database notice: ${notice.message} ###`)
        }
    })

try{
    await SQL`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(60) UNIQUE NOT NULL,
            password VARCHAR(60) NOT NULL,
            token VARCHAR(60) UNIQUE NOT NULL
        )`

} catch(e){
  console.log(`Database creation resulted in erro: ${e}`)
}

export default SQL