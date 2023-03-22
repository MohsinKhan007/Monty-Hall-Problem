import express, { Application, Request, Response } from 'express'
import dotenv, { config } from 'dotenv'
import cors from 'cors'
import GameRoutes from './routes/index'
import errorHandler from './middleware/errorHandler'
import createServer from './utils/server'
dotenv.config()

const app = createServer()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`)
})

export default app
