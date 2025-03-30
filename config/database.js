const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Cargar las variables de entorno

const url_mongo = process.env.MONGO_URL || 'mongodb://localhost:27017/midatabase';

const connectDB = async () => {
    try {
        await mongoose.connect(url_mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
