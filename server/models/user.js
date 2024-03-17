const db = require('../config/db');

class UserModel {
    static async getUsers(){
        return new Promise(resolve => {
            db.query('SELECT * FROM user', (error, result) => {
                if(!error)
                resolve(result);
            })
        })
    }

    static async addUsers(user){
        return new Promise(resolve => {
            db.query('INSERT INTO user(LAST_NAME, NAME, SECOND_NAME, WORK_POSITION, EMAIL, MOBILE_PHONE, PHONE, LOGIN, PASSWORD, DEPARTMENT) VALUES(?,?,?,?,?,?,?,?,?,?)',
                [user.LAST_NAME, user.NAME, user.SECOND_NAME, user.WORK_POSITION, user.EMAIL, user.MOBILE_PHONE, user.PHONE, user.LOGIN, user.PASSWORD, user.DEPARTMENT], (error, result) => {
                if(!error){
                    resolve(true);
                }
                else{
                    console.log(error);
                    resolve(false);
                }
            })
        })
    }
}

module.exports = UserModel;