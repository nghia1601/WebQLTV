const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { insertBook, mongoDB } = require('../db')
const jwtSecret = "NguyenTrongNghia08022003@"


//router dang ky
router.post("/creatuser", [
    //username la email
    body('email', 'Sai Email').isEmail(),
    //password dai hon 4 ky tu
    body('name', 'Sai Ten').isLength({ min: 5 }),
    body('password', 'Sai Password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //token
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            
            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

//router dang nhap
router.post("/loginuser",[
    //username la email
    body('email', 'Sai Email').isEmail(),
    //password dai hon 4 ky tu
    body('password', 'Sai Password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({email});
            if (!userData) {
                return res.status(400).json({ errors: "Email Hoặc Passwork Không Đúng" })
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Email Hoặc Passwork Không Đúng" })
            }
            const data = {
                user:{
                    id:userData.id
                }
            }

            //token
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true, authToken:authToken })



        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

    router.post('/addBook', async (req, res) => {
        try {
            const { name, CategoryName, img, description, price } = req.body;
            const newBook = { name, CategoryName, img, description, price };
    
            // Chèn sách mới
            await insertBook(newBook);
    
            // Tải lại dữ liệu sau khi thêm sách
            await mongoDB();
    
            // Trả về danh sách sách đã cập nhật
            res.json({ success: true, book: global.book });
        } catch (error) {
            console.error('Lỗi khi thêm sách:', error);
            res.status(500).json({ success: false, error: 'Lỗi khi thêm sách' });
        }
    });

module.exports = router;