// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Employee extends Engineer{
constructor(github){
this.github=github
} 
    getGithub(){
        return this.github
    } 
    
    getRole(){
        return 'Engineer'
    }
}

module.export = Engineer