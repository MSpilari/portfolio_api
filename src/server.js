const express = require('express')
const cors = require('cors')

const app = express()

const routes = require('./routes')

require('./database/connection')

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT || 3333, () => console.log('Server is running'))