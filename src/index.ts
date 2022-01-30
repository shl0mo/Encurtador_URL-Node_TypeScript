import express, { Request, Response } from 'express'
import { urlController } from './controllers/urlController'
import { mongoConnection } from './database/mongoConnection'
import { config } from './config/constants'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const host = config.HOST
const porta = config.PORTA

const banco_dados = new mongoConnection()
banco_dados.conectar()

const url_controller = new urlController()
app.post('/encurtador', url_controller.encurtador)

app.get('/:hash', url_controller.redirecionar)

app.get('/', (req: Request, res: Response) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(porta, () => {
	console.log(`Servidor rodando na porta ${host}:${porta}`)
})
