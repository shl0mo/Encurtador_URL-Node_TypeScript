import express, { Request, Response } from 'express'
import { urlController } from './controllers/urlController'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const host = 'http://localhost'
const porta = '3001'

const url_controller = new urlController()
app.post('/encurtador', url_controller.encurtador)

app.get('/', (req: Request, res: Response) => {
	res.send('get request')	
})

app.listen(porta, () => {
	console.log(`Servidor rodando na porta ${host}:${porta}`)
})
