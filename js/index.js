const player = document.getElementById('player');
const ground = document.getElementById('ground');

let speed =0;
let speedy =4;
// let speedup;
let acc =0.2;

let index =0;


const move =()=>{
    
  

    if(player.offsetLeft>innerWidth-player.offsetWidth){
        speed=0;
        player.style.left =`${innerWidth-player.offsetWidth}px`;
    
    }else if(player.offsetLeft<0){
        speed=0;
        player.style.left =0;
    }
    player.style.left = `${player.offsetLeft+speed}px`; 
    
    speedy += acc;

    if(player.offsetTop>(ground.offsetTop-player.offsetHeight)){
       
        speedy=0;
        player.style.top = `${ground.offsetTop-player.offsetHeight}px`; 
        acc = 0;
    }
    

    player.style.top = `${player.offsetTop+speedy}px`; 
    
    requestAnimationFrame(move);

};


const avtar =()=>{
    if(speed!==0){
        
        player.style.backgroundImage = `url(../img/templerun/Run__00${index++}.png)`
        
    }else if(speedy!==0){
        
        player.style.backgroundImage = `url(../img/templerun/Jump__00${index++}.png)`

    }else{
        // index = 1;
        player.style.backgroundImage = `url(../img/templerun/Idle__00${index++}.png)`
    }
    if(index>9) index =0;

    requestAnimationFrame(avtar);

};



addEventListener('keydown',(eventData)=>{
    // console.log(player.offsetLeft);
    // console.log(innerWidth);
    // console.log(player.offsetWidth)
    // console.log(speedDown);
    if(eventData.key === 'ArrowRight' ){
        player.classList.remove('turn');
        index =0;
        speed = 10
        // speedy = 4;
    }
    if(eventData.key === 'ArrowLeft' ){
        player.classList.add('turn');
        index = 0;
        speed =-10;
        // speedy =4;
    }
    


});


addEventListener('keypress',(eventData)=>{
    console.log(eventData);
    if(eventData.key === ' '){
        speedy -= 4;
        acc = 0.1;
    }
});


addEventListener('keyup',(eventData)=>{
    if(eventData.key === 'ArrowRight' || eventData.key === 'ArrowLeft') speed =0;
});


requestAnimationFrame(avtar);
requestAnimationFrame(move);


// let j =0;
// let time =0;
// const interval = 1;

// function paint(timestamp){
    
//     if(!time) time=timestamp
//     const diff = timestamp-time;
//     if(diff>=(interval*1000)){
//         time = timestamp;
//         console.log("printed")
//     }

//     requestAnimationFrame(paint);
    
// }

// requestAnimationFrame(paint);