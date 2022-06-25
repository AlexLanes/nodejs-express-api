"use strict"

// Dependencys
  import express from 'express'   // main express
  import 'dotenv/config'          // .env dependency
  import path from 'path';        // path module

const __dirname = path.resolve().replaceAll('\\', '/') // app.js directory

const app = express()     // Create instance of express
app.use( express.json() ) // Middleware for parsing json

// Controllers dependency injection
  for( let controller_name of process.env.CONTROLLERS.split(',') ){
    let directory  = `file://${__dirname}/routes/${controller_name}.js` // Directory of dependency
    let controller = await import(directory)                            // Import of dependecy
    controller.configure(app)                                           // Configure app resource 
    console.log(`Controller injected: ${directory}`)                    // Log app resource
  }

// Listen
  const PORT = process.env.PORT // Port from .env
  app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
  });