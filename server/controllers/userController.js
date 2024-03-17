const UserModel = require('../models/user');

class UserController{
    static async getAllUsers(req, res){
        var result = await UserModel.getUsers();
        if(result)
            res.send(result);
    }

    static async addUsers(req, res){
        const user = {
            LAST_NAME: req.body.LAST_NAME,
            NAME: req.body.NAME, 
            SECOND_NAME: req.body.SECOND_NAME, 
            WORK_POSITION: req.body.WORK_POSITION, 
            EMAIL: req.body.EMAIL, 
            MOBILE_PHONE: req.body.MOBILE_PHONE, 
            PHONE: req.body.PHONE, 
            LOGIN: req.body.LOGIN, 
            PASSWORD: req.body.PASSWORD, 
            DEPARTMENT: req.body.DEPARTMENT
        }
        var result = await UserModel.addUsers(user);
        if(result)
            res.send('success');
        else
            res.send('failure');
    }
}

module.exports = UserController;