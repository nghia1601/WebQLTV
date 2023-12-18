const mongoose = require('mongoose');
//version 5.5 or later
// const mongoURI = 'mongodb+srv://nghia1601:nghia1601@dbthuvien.emlgel6.mongodb.net/WebThuVien?retryWrites=true&w=majority';

//version 2.2.12 or later
const mongoURI = 'mongodb://nghia1601:nghia1601@ac-scjys5n-shard-00-00.emlgel6.mongodb.net:27017,ac-scjys5n-shard-00-01.emlgel6.mongodb.net:27017,ac-scjys5n-shard-00-02.emlgel6.mongodb.net:27017/WebThuVien?ssl=true&replicaSet=atlas-gir8pz-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to MongoDB");

        // Load book data
        const bookCollection = mongoose.connection.db.collection("book");
        const bookData = await bookCollection.find({}).toArray();

        // Load category data
        const categoryCollection = mongoose.connection.db.collection("category");
        const catData = await categoryCollection.find({}).toArray();

        // Load  user
        const userCollection = mongoose.connection.db.collection("users");
        const userData = await userCollection.find({}).toArray();

        global.book = bookData;
        global.category = catData;
        global.user = userData;


        console.log("Data Load Seccess");
    } catch (error) {
        console.error("---", error);
    }

    const insertBook = async (bookData) => {
        try {
            const bookCollection = mongoose.connection.db.collection("book");
            await bookCollection.insertOne(bookData);
            console.log("Sách đã được thêm thành công");
        } catch (error) {
            console.error("Lỗi khi thêm sách:", error);
        }
    };
};


module.exports =  mongoDB ;

