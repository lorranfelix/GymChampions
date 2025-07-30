const mongoose = require('mongoose');

async function main() {

    try {

        await mongoose.connect(
            "mongodb+srv://lorranjuina:<EXiwTrx01wg9cWLy>@cluster0.ffn42in.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 
        );
        } catch (error){
        console.log('Error connecting to MongoDB: ', error);
    }
}
module.exports = main

// mongodb+srv://lorranjuina:<EXiwTrx01wg9cWLy>@cluster0.ffn42in.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0