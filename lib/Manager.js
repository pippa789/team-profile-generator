class Employee extends Manager{
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'manager';
    }
}
module.exports = Manager