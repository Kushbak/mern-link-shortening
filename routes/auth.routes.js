const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = Router()

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const candidate = await User.findOne({ email })

        if(candidate && await bcrypt.compare(password, candidate.password)) {
            return res.json(candidate)
        }
        
        return res.status(400).json({ message: 'Неправильный логин или пароль.' })
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте чуть позже....' })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({ message: 'Пользователь с таким email уже существует.' })
        }

        const user = new User({ 
            email, 
            password: await bcrypt.hash(password, 16) 
        })

        await user.save()
        res.status(201).json({ message: 'Пользователь создан' })
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте чуть позже.' })
    }
})

module.exports = router