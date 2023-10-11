const { response } = require('express')
const dmsfilemodel = require('../Model/dmsfilemodel')

async function filecerate(body){
    try {
        if (!body.folderid){

            const resp = await dmsfilemodel.create({

                userid: body.userid,
                filename: body.filename,
                content: body.content

            });

            return {"message": "file created successfully on the home page."};

        }

        else{

            const resp = await dmsfilemodel.create({

                folderid: body.folderid,
                userid: body.userid,
                filename: body.filename,
                content: body.content

            });

            return {"message": "file created successfully."};

        }
    }
    catch(err){
        return{"message": "file can not be created"}
    }
}

async function fileretrive(body){

    try{

        if (!body.userid || !body.filename) {

            return {"message": "parameters required are not provided"}
        }

        const file = await dmsfilemodel.findOne({
            userid: body.userid,
            filename: body.filename
        }).exec()

        console.log( file)
        return file
    }

    catch(err){
        return {"message": "file dosent exist in the system"}
    }

}

module.exports ={
    filecerate,fileretrive
}