import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/constants'

export class urlController {
	public async encurtador (req: Request, res: Response): Promise<void> {
		const { url_original } = req.body
		const hash = shortId.generate()
		const url_encurtada = `${config.URL_API}/${hash}`
		res.json({  url_original, hash, url_encurtada })
	}	
}
