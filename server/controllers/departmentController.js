const DepartmentModel = require('../models/department');

class DepartmentController{
    static async getAllDepartments(req, res){
        var result = await DepartmentModel.getDepartments();
        if(result)
            res.send(result);
    }

    static async addDepartments(req, res){
        const departments = req.body.map(department => [department.name]);
        
        var result = await DepartmentModel.addDepartments(departments);
        if(result)
            res.send('record added successfully');
        else
            res.send('record creation failed');
    }
}

module.exports = DepartmentController;