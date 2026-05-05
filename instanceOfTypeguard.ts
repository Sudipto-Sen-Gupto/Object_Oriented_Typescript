
 class Bike {
         name:string;
         price:number;

         constructor(name:string,price:number){
               this.name=name;
               this.price=price;
         }

         getMiles(miles:number){
                  console.log(`${this.name} miles is ${miles}`);
         }
 }

  class Honda extends Bike{
         
         constructor(name:string,price:number){
                 super(name,price)
         }

         getComfort(comfort:string){
             console.log(`${this.name} comfort is ${comfort}`);
         }
  }

  class Suzuki extends Bike{
            constructor(name:string,price:number){
                      super(name,price)
            }

            getspeed(speed:number){
                 console.log(`${this.name} speed is ${speed}`);
            }
  }

  const suzukiCompany=new Suzuki('Zixxer',170000)
  const hondaCompany=new Honda('Hornate',150000)
   const bike=new Bike('Both bike',170000)


  const alternateInstanceForHonda=(user:Bike)=>{
          return user instanceof Honda
  }

  const alternateInstanceForSuzuki=(user:Bike)=>{
           return user instanceof Suzuki
  }
    

  const getFinalResult=(user:Bike)=>{
            //   if(user instanceof Honda){
              if(alternateInstanceForHonda(user)){
                user.getComfort('Very Smooth')
              }
              else if(alternateInstanceForSuzuki(user)){
                      user.getspeed(170)
              }

              else user.getMiles(40)
  }

  getFinalResult(hondaCompany)
  getFinalResult(suzukiCompany)
  getFinalResult(bike)