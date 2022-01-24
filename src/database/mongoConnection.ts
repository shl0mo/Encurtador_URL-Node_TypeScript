import mongoose from 'mongoose'
import { config } from '../config/constants' 

export class mongoConnection {
	public async conectar(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONN, { useNewUrlParser: true, useUndefinedTopology: true })
			console.log('Bancod de dados conectado')
		} catch (err) {
			console.error(err.message)
			process.exit()
		}
	}
}
