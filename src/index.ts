import express, { Request, Response } from 'express'

const app = express()

const host = 'http://localhost'
const porta = '3001'

app.get('/', (req: Request, res: Response) => {
	res.send('get request')	
})

app.listen(porta, () => {
	console.log(`Servidor rodando na porta ${host}:${porta}`)
})
