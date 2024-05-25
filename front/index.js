
const app = require('express')()

app.get('', (req, res) => {
	res.status(200).json({"ping": "pong"})
})

module.exports = app
