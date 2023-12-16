const mongoose = require('mongoose');
//version 5.5 or later
// const mongoURI = 'mongodb+srv://nghia1601:nghia1601@dbthuvien.emlgel6.mongodb.net/WebThuVien?retryWrites=true&w=majority';

//version 2.2.12 or later
const mongoURI = 'mongodb://nghia1601:nghia1601@ac-scjys5n-shard-00-00.emlgel6.mongodb.net:27017,ac-scjys5n-shard-00-01.emlgel6.mongodb.net:27017,ac-scjys5n-shard-00-02.emlgel6.mongodb.net:27017/WebThuVien?ssl=true&replicaSet=atlas-gir8pz-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
        const fetched_data = await mongoose.connection.db.collection("book");
        const data = await fetched_data.find({}).toArray();
        global.book = data;
        console.log(global.book)
    } catch (error) {
        console.error("---", error);  
    }
};

module.exports = mongoDB;
