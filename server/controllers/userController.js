const UserModel = require('../models/user');

class UserController{
    static async getAllUsers(req, res){
        var result = await UserModel.getUsers();
        if(result)
            res.send(result);
    }

    static async addUsers(req, res){
        const users = req.body.map(user => [
            user.LAST_NAME,
            user.NAME, 
            user.SECOND_NAME, 
            user.WORK_POSITION, 
            user.EMAIL, 
            user.MOBILE_PHONE, 
            user.PHONE, 
            user.LOGIN, 
            user.PASSWORD, 
            user.DEPARTMENT
        ])

        var result = await UserModel.addUsers(users);
        if(result)
            res.send('success');
        else
            res.send('failure');
    }
}

module.exports = UserController;