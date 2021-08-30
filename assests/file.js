// get containers worktimer & breaktimer
let workContainer = document.getElementById("container");
let breakContainer = document.getElementById("break-container")

// get the min and secondes 
let heyMin = document.querySelector("#min");
let heySec = document.getElementById("sec");
// get the btns 
let start = document.getElementById("btn");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset")

// get the min & sec for the timer 
let breakMineut =document.getElementById("b-min");
let breakSecond =document.getElementById("b-sec");

// get counter 
let count = document.getElementById("count");

// get the sounds
let breakSound = document.getElementById("break")
let backToWorkSound = document.getElementById("back-work")
let btnSound = document.getElementById("btn-audio")

// global variabale to use later
let minNum = 24;
let secNum = 59;
let secNumBreak = 59;
let bMin = 5;
let shortBreak = breakMineut.textContent=5;
let longBreak = 14;


// start the timer with these values 
heySec.textContent = "00";
heyMin.textContent = 25;
breakMineut.textContent = 5;
breakSecond.textContent = "00";
let counter = 0;
count.textContent = `round: ${counter}`;

// add event click to the start btn

var startTimer ;

start.addEventListener("click", () => {

  startTimer= setInterval(incrementTime, 10)
  heyMin.textContent = minNum;
heySec.textContent = secNumBreak;

        start.style.display= "none";
       stop.style.display="flex"
     btnSound.play()

})

// stop or pause function and her event 
stop.addEventListener("click", stopInterval)

function stopInterval() {
  clearInterval(startTimer);

  start.style.display= "flex";
  stop.style.display="none"
  btnSound.play()
}

// reset function and her event 
reset.addEventListener("click", resetTimer)

function resetTimer(){
  clearInterval(startTimer)
    start.style.display= "flex";
    stop.style.display="none"
    heySec.textContent = "00";
      heyMin.textContent = "25";
      breakMineut.textContent = "5";
      breakSecond.textContent = "00"
      minNum =24
      secNum=59;
      secNumBreak=59;
      shortBreak =4;
  btnSound.play()

}
//  create function thet applay every 1 seceond
function incrementTime(){

  // work timer
  checkWork()


// break timer
   checkBreak()

 //Increment Counter by one if one round is completed
   plusCounter()

   clearInterval()
// check if round => 4 break will change => 14

showBreak()
}




// function checek work sec and min 
 function checkWork(){
    if(secNum != 0 ){
        secNum--;
       heySec.textContent = secNum
      }
      else if(minNum !=0 && secNum == 0){
        secNum = 59;
        minNum--;
       heyMin.textContent = minNum
       heySec.textContent = secNum
    
  
      }
      if(secNum == 0 && minNum == 0){
          breakSound.play()
      }
     
     
 }

// function checek  break sec and min 

 function checkBreak(){
    if(minNum == 0 && secNum == 0){
        if(shortBreak != 0){
          secNumBreak--
          breakSecond.textContent= secNumBreak
          if(secNumBreak <= 0){
            shortBreak--
            secNumBreak =59  
            
          }
      
          breakMineut.textContent= shortBreak
          
    
        }
        else if(shortBreak !=0 && secNumBreak == 0){
         secNumBreak =59;
         shortBreak--
         breakMineut.textContent = shortBreak
         breakSecond.textContent = secNumBreak;
        }
      
      }
  
    }
 
 
//  it's add 1 to the counter every round & add alert to show you finished works
 function plusCounter(){
    if (heyMin.textContent == 0 && heyMin.textContent== 0 && breakMineut.textContent == 0 && breakSecond.textContent== 0){
        backToWorkSound.play()
        alert ("you fineshed 1 round ")
        counter++
        count.textContent = counter;
        resetTimer()
        stopInterval() 
        
      }
 }

// check if round => 4 break will change => 14
 function showBreak(){

    if(count.textContent >= 1){
      shortBreak =14
   
    }
    if(secNumBreak <= 0){
      shortBreak--
      secNumBreak =59  
    }
   
    
}

