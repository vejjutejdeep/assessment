const express = require('express')
const router = express.Router()

const User = require('../Controller/dmscontroller')

// router.get('/', User.index)
router.post('/save',async (request,response,next) => {
    // console.log(request.body);
    
    const res = await User.save(request.body);
    response.send(res);

})

router.post('/login',async (request,response,next) => {
    
    const res = await User.login(request.body);
    response.send(res);

})


module.exports = router