const express = require('express')
const router = express.Router()

const User = require('../Controller/dmsfilescontroller')

// router.get('/', User.index)
router.post('/filecreate',async (request,response,next) => {
    
    const res = await User.filecerate(request.body);
    response.send(res);

})

router.post('/fileretrive',async (request,response,next) => {
    
    const res = await User.login(request.body);
    response.send(res);

})


module.exports = router