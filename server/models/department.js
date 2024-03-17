const db = require('../config/db');

class DepartmentModel {
    static async getDepartments(){
        return new Promise(resolve => {
            db.query('SELECT * FROM department', (error, result) => {
                if(!error)
                resolve(result);
            })
        })
    }

    static async addDepartments(departments){
        return new Promise(resolve => {
            db.query('INSERT INTO department (NAME_DEPARTMENT) VALUES ?', [departments], (error, result) => {
                if(!error)
                    resolve(true);
                else
                    resolve(false);
            })
        })
    }
}

module.exports = DepartmentModel;