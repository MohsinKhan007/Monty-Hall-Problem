import cors from 'cors'
import express, { Request, Response } from 'express'
import errorHandler from '../middleware/errorHandler'
import GameRoutes from '../routes'
function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.urlencoded())
  app.use(express.json())
  app.use(errorHandler)

  app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'Monty Hall Backend' })
  })
  app.post('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'Monty Hall Backend' })
  })
  app.use('/monty', GameRoutes)
  app.get('*', (req: Request, res: Response) => {
    res.status(404).send('End point Not Found')
  })
  app.post('*', (req: Request, res: Response) => {
    res.status(404).send('End point Not Found')
  })

  return app
}
export default createServer
