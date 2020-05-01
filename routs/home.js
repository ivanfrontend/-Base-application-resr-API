const {Router} = require('express');
const  router = Router()

router.get('/', (req, res) => {
    res.send(`
    Hi my friend,
    you have my rest API,
    this home page, 
    app use method GET`)
})

module.exports = router