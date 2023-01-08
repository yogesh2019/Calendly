const mongoose = require('mongoose');
require('dotenv').config();
const DbURI = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(DbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongodb is connected')
    } catch (error) {
        console.log("mongo not connected", error);
        process.exit(1);
    }
}
module.exports = connectDb;