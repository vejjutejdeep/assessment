const { response } = require('express')
const dmsmodel = require('../Model/dmsmodel')

async function save(body) {
    try {
        if (!body.name ||  !body.password) {
            throw new Error()
        }
    const response = await dmsmodel.create({
        name:body.name,
        username: body.name,
        password: body.password
    });
    return {"message":"user has been created successfully"};
    } catch (err) {
        return {"message":"user has not been created successfully"};
    }

}

async function login(body) {
    try {
        // if (!body.name ||  !body.password) {
        //     throw new Error()
        // }
        
        console.log(body)

        const response = await dmsmodel.findOne({
            username: body.name,
        }).exec();
        console.log(response.password)
        if (response.password == body.password){
            return {"message":"user can be logged in"};
        }
        else{
            return {"message":"user password is incorrect"};
        }

    } catch (err) {
        return {"message":"user does not exist"};
    }

}



module.exports = {
    save,login
}