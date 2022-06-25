"use strict"
import postgres from 'postgres'
import 'dotenv/config' // .env dependency

const DATABASE = process.env.DATABASE.split(',')

const SQL = postgres({
    host    : DATABASE[0],  // Postgres ip address[s] or domain name[s]
    port    : DATABASE[1],  // Postgres server port[s]
    database: DATABASE[2],  // Name of database to connect to
    username: DATABASE[3],  // Username of database user
    password: DATABASE[4],  // Password of database user
})

export default SQL