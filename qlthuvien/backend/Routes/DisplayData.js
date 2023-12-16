const express = require('express')
const router = express.Router()


router.post('/bookData', (req,res)=>{
    try {
        console.log(global.book)
        res.send(global.book)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
        
    }
})

module.exports = router;