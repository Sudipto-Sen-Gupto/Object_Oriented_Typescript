

 //type of guard
      type numeric=string | number
//  const add=(num1:string | number,num2:string|number)=>{
 const add=(num1:numeric,num2:numeric)=>{

        if(typeof num1==='number' && typeof num2==='number'){
              return num1+num2
        }
           else{
              return num1.toLocaleString()+num2.toLocaleString()
           }
             
 }

//  console.log(add(2,'3'));

//in type guard

 type NormalUser={
     name:string
 }
 type AdminUser={
     name:string;
     role:'Admin'
 }

  const entrance=(user:NormalUser|AdminUser)=>{

    if('role' in user){
          console.log(`${user.name} is ${user.role}`);
    }
    else{
         console.log(`${user.name}is normal user`);
    }
         
  }

  entrance({name:'Gulabuddin',role:'Admin'})