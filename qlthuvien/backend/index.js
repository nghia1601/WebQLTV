const express = require('express')
const mongoDB = require('./db')
const app = express()
const cors = require('cors')


const port = 5000
//tạo middleware
//Middleware có thể thực hiện các nhiệm vụ như xử lý dữ liệu đầu vào
//Middleware có thể được sử dụng để biến đổi yêu cầu (request) 
//hoặc phản hồi (response) trước khi chúng được chuyển đến route cụ thể.
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

mongoDB();

// Sử dụng middleware cors
app.use(cors());

app.use(express.json())

app.use('/api', require("./Routes/CreatUser"));

app.use('/api', require("./Routes/DisplayData"));

app.get('/', (req, res) =>{
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})