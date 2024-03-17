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

    static async addUsers(users){
        return new Promise(resolve => {
            const sql = 'INSERT INTO user(LAST_NAME, NAME, SECOND_NAME, WORK_POSITION,'+
                'EMAIL, MOBILE_PHONE, PHONE, LOGIN, PASSWORD, DEPARTMENT) VALUES ?';
            db.query(sql, [users], (error, result) => {
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