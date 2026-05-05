//abstraction the third pillar of Object oriented programming 
//Abstraction in object-oriented programming is the concept of hiding implementation details and showing only the essential features of an object.

//interface
//abstract class


//interface method
interface MultiMedia{
            play():void;
            pause():void;
            repeat():void;
}

class MyMusicPlayer implements MultiMedia{
      play(){
        console.log('The song is playing ....');
      };
       
      pause(){
        console.log('The song is paused....');
      }

      repeat(){
        console.log('The song is repeat..');
      }

}

const music=new MyMusicPlayer();
music.pause()


//abstract class method

abstract class PhoneMusic{
   abstract play():void;
    abstract pause():void;
   abstract repeat():void;
}

class YourMusicPlayer extends PhoneMusic{
     play(){
         console.log("Your fav music is playing ...");
     }
     pause(){
        console.log("Your music is stopped...");
     }

     repeat(){
        console.log('your music is repeating');
     }
}

const yourPhoneMusic=new YourMusicPlayer();
yourPhoneMusic.play()