class Employee extends Intern{
    constructor(school){
    this.school = school
}
getSchool(){
    return this.school
}
getRole(){
    return 'Intern'
}
}
module.export = Intern