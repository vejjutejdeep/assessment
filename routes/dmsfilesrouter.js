const express = require('express')
const router = express.Router()

const file = require('../Controller/dmsfilescontroller')

// router.get('/', User.index)
router.post('/filecreate',async (request,response,next) => {
    
    const res = await file.filecerate(request.body);
    response.send(res);

})

router.post('/fileretrive',async (request,response,next) => {
    
    const res = await file.fileretrive(request.body);
    response.send(res);

})


module.exports = router