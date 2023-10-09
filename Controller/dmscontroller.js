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
        if (!body.name ||  !body.password) {
            throw new Error()
        }
    const response = await dmsmodel.findOne({
        username: body.name,
    }).exec();
    return {"message":"user can be logged in"};
    } catch (err) {
        return {"message":"user has not been created successfully"};
    }

}



module.exports = {
    save,login
}