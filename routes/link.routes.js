const { Router } = require('express')
const Link = require('../models/Link')
const router = Router()

router.get('links', async (req, res) => {
    try {
        const links = await Link.find({ user: req.user  })
        res.json(links)
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте чуть позже....' })
    }
})

router.post('link', async (req, res) => {
    try {
        
    } catch(e) {
        console.log(e)        
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте чуть позже....' })
    }
})

module.exports = router