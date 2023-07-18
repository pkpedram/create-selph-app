const mongoose = require('mongoose')

 const connectDB = async () => {
    await mongoose.connect(`mongodb://127.0.0.1:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    console.log(`DATABASE CONNECTED! \n mongodb://127.0.0.1:${process.env.DB_PORT}/${process.env.DB_NAME}`)
}

module.exports = {
    connectDB
}