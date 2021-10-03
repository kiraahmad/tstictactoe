import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import { calculateWinner } from './helper'

const app: Application = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hi')
})

app.post('/api/tic', (req: Request, res: Response) => {
  const squares = req.body

  // Will calculate if there is a winner then send the winner to the front-end
  const winner = calculateWinner(squares)
  winner ? res.json({winner}) : res.json({message: ' '})
})

app.listen(5000, () => console.log('Server Running on Port 5000'))