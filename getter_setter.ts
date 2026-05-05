 

 class BankAccount{
           public userName:string;
         public  readonly   userId:string;
            // private userBalance:number;
            protected userBalance:number;

            constructor(userName:string,userId:string,userBalance:number){
                     this.userName=userName;
                     this.userId=userId;
                     this.userBalance=userBalance;

            }

            
              
             
            // addBalance(balance:number){
            //     this.userBalance=this.userBalance+balance
            // }

            // getBalance(){
            //     return this.userBalance
            // }

            //if we don't want to call a function and use a function as normal property then we can use set and get keyword

            set addBalance(balance:number){
                   this.userBalance=this.userBalance+balance
            }

            get getBalance(){
                 return this.userBalance
            }

 }

   const myBalance=new BankAccount('Gaurav','h144',10000)


     
 

//    console.log(myBalance.userId); 
//    myBalance.addBalance(5000);  
//    console.log(myBalance);
//    console.log(myBalance.getBalance());

myBalance.addBalance=15398;
console.log(myBalance.getBalance);
   
      
