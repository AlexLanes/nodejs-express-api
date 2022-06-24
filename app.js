import express from 'express'
import 'dotenv/config'

const app = express()
app.use( express.json() )


import DefaultExports from './routes/getPassword.js'
DefaultExports(app)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});