 // polymorphism-chameleon
// Polymorphism in object-oriented programming is the ability of a single method or function to take multiple forms, behaving differently based on the object or input that uses it.
 class Device{
         charge(){
             console.log('all device r charge thake 1 din');
         }

 }
  
  class Sony extends Device{
           charge() {
                console.log('Sony charge thake 2 din');
           }
  }

  class Nokia extends Device{
          charge(){
             console.log('nokia r charge thake 5 din');
          }
  }

   const getCharge=(phone:Device)=>phone.charge()

  const nokia=new Nokia()
  const sony=new Sony()
  const allDevice=new Device()

  getCharge(nokia)


  class Shape{
         getArea():number{
            return 0
         }
  }
  
   
  class Circle extends Shape{
    
    radius:number;

    constructor(radius:number){
        super()
        this.radius=radius
    }
    getArea():number{
        const result=Math.PI*this.radius*this.radius
        return result 
    }
  }

  class Triangle extends Shape{
      base:number;
      height:number;

      constructor(base:number,height:number){
        super()
        this.base=base;
        this.height=height
      }
      getArea():number{
            const result=(this.base*this.height)/2
            return result
      }
  }

  const circleArea=new Circle(5);
  const triangleArea=new Triangle(4,5)
  const shape=new Shape()
  console.log(circleArea.getArea());
  console.log(triangleArea.getArea());
  console.log(shape.getArea());