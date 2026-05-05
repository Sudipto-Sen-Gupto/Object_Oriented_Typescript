
  class Vehicle{
         name:string;
         price:number;
         roar:string;
         performance:string;

         constructor(name:string,price:number,roar:string,performance:string){
                  this.name=name;
                  this.price=price;
                  this.roar=roar;
                  this.performance=performance;
         }

         vehiclePerform(){
                    console.log(`${this.name} performance is ${this.performance}`);
         }
  }

  const yahmaahaBike=new Vehicle('FzV1',270000,'ghir ghir ghir','Smooth and comfort')
  const suzukiBike=new Vehicle('Suzuki zixxer',250000,'hoom hoo hoom','Rude and wonderful braking control')
  console.log(suzukiBike.price);
  yahmaahaBike.vehiclePerform()