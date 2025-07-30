const mongoose = require('mongoose');

async function main() {

    try {

        mongoose.set('strictQuery', true);
        // Conexão com o MongoDB usando a URI do ambiente

        await mongoose.connect(
            "mongodb+srv://lorranjuina:<EXiwTrx01wg9cWLy>@cluster0.ffn42in.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 
        );
        console.log("MongoDB conectado com sucesso ao banco de dados");
        } catch (error){
        console.log('Error connecting to MongoDB: ', error);
    }
}
module.exports = main;

// mongodb+srv://lorranjuina:<EXiwTrx01wg9cWLy>@cluster0.ffn42in.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0