const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://nghia1601:nghia1601@dbthuvien.emlgel6.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = mongoDB;
