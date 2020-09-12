const mongoose =  require('mongoose')

const db_configs = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dataBase: process.env.DB_NAME
}

mongoose.connect(
    `mongodb+srv://${db_configs.username}:${db_configs.password}@portfoliocluster.luvo6.gcp.mongodb.net/${db_configs.dataBase}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('MongoDB Atlas is connected !'))

