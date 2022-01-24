import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/constants'
import { URLModel } from '../database/models/URL'

export class urlController {
	public async encurtador (req: Request, res: Response): Promise<void> {
		const { url_original } = req.body
		let url = await URLModel.findOne({ url_original })
		if (url) {
			res.json(url)
			return
		}
		const hash = shortId.generate()
		const url_encurtada = `${config.URL_API}/${hash}`
		url = await URLModel.create({ hash, url_encurtada, url_original })
		res.json({  url_original, hash, url_encurtada })
	}

	public async redirecionar (req: Request, res: Response): Promise<void> {
		const { hash } = req.params
		const url = await URLModel.findOne({ hash })
		if (url) {
			res.redirect(url.url_original)
			return
		}
		res.status(400).json({error: 'URL não encontrada'})
	}
}
