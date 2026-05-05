 

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

            //by using private we can declare this object into this class 

            addBalance(balance:number){
                this.userBalance=this.userBalance+balance
            }
 }

   const myBalance=new BankAccount('Gaurav','h144',10000)
//    myBalance.userId='34h1' //thus we can not change this kind of value thats we should use access modifier as read only modifier
// myBalance.userBalance=10000+5000; thus we can not do  this for this kind of sensitive information .If we set 0 for balance the rich people will poor and the bank manager will go jail .We can use 'private' keyword and make a function for balance increasing or decreasing;

 class TomarAccount extends BankAccount{
         addTomarBalance(balance){
                                  //if we use private keyword then we cann't access userBalance in her so we can use protected keyword for our work purpose
                      this.userBalance=this.userBalance+balance            
                                   
         }
 }
     
 const TomarBalance=new TomarAccount('Piyali','dkf33',12200)
  TomarBalance.addTomarBalance(5000)
  console.log(TomarBalance);

   console.log(myBalance.userId); 
   myBalance.addBalance(5000);
   console.log(myBalance);
   
      
