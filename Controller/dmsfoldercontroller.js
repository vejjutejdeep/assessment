const { response } = require('express')
const dmsfolderschema = require('../Model/dmsfolder')

async function foldercerate(body){
    try {
        if (body.userid){

            const resp = await dmsfolderschema.create({

                userid: body.userid,
                foldername: body.foldername

            });

            console.log(resp);

            return {"message": "folder created successfully on the home page."};

        }

        else {
            return {"message": "folder can not be created as it dose contain the user data."};
        }
    }
    catch(err){
        return{"message": "folder can not be created"}
    }
}

async function folderretrive(body){

    try{

        if (!body.userid || !body.foldername) {

            return {"message": "parameters required are not provided"}
        }

        const folder = await dmsfolderschema.findOne({
            userid: body.userid,
            foldername: body.foldername
        }).exec()

        console.log( folder)
        return folder
    }

    catch(err){
        return {"message": "folder dosent exist in the system"}
    }

}

module.exports ={
    foldercerate,folderretrive
}