const express = require('express')
const router = express.Router()

const folder = require('../Controller/dmsfoldercontroller')

// router.get('/', User.index)
router.post('/foldercreate',async (request,response,next) => {
    
    const res = await folder.foldercerate(request.body);
    response.send(res);

})

router.post('/folderretrive',async (request,response,next) => {
    
    const res = await folder.folderretrive(request.body);
    response.send(res);

})


module.exports = router