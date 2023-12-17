const express = require('express')
const router = express.Router()

router.post('/bookData', (req, res) => {
    try {
        // Sử dụng res.status().send() thay vì res.send() với nhiều đối số
        res.status(200).send({ book: global.book, category: global.category });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// router.post('/bookData', (req,res)=>{
//     try {
        
//         res.send(global.book, global.category)
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error")
        
//     }
// })

module.exports = router;