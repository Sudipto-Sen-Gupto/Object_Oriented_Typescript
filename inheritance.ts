// Inheritance in TypeScript is a way to reuse code from one class into another class. It helps you avoid repeating the same properties and methods.

//One class (child) can inherit properties and methods from another class (parent)
 
   class Person{
            name:string;
         age:number; 
         performance:string;

         constructor(name:string,age:number,performance:string){
                  this.name=name;
                  this.age=age;
                  this.performance=performance;
         }

           Address(address:string){
                  console.log(`${this.name} is from ${address}`);
         }
   }

class Student extends Person{}  //whereas child takes only parents value thats why it contain only empty obj


class Teacher extends Person{
           
           designation:string;
           

           constructor(name:string,age:number,designation:string,performance:string){
                            
                super(name,age,performance)
                            this.designation=designation;
                            
           }

          
}

const student1=new Student('Kader',25,'good')
const teacher1=new Teacher('Mohsin',48,'Lecturer','very good')
teacher1.Address('Rangpur')
 student1.Address('khulna')