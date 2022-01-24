import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema_url = new Schema({
	url_original: {
		type: String,
		required: true
	},
	hash: {
		type: String,
		required: true
	},
	url_encurtada: {
		type: String,
		required: true
	}
	
})

export const URLModel = mongoose.model('URL', schema_url)
