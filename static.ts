 

  class Counter{
         static count:number=0;

        static  increament(){                  //whenever we call here static we do not need to declare instance unnecessarily 
               return Counter.count=Counter.count+1
          }

        static  decreament(){
               return Counter.count=Counter.count-1
          }
  }

  
  console.log(Counter.increament());
  console.log(Counter.increament());
  console.log(Counter.increament());

  //when we take different instance the value start from initial thats we can use static keyword
  console.log(Counter.increament());
  console.log(Counter.increament());
  console.log(Counter.increament());