import express, { Application, Request, Response, NextFunction } from 'express'
import env from './env'

const app: Application = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Api is up' })
})

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`)
})
