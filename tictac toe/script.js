console.log("Welcome to My Tic Tac Toe")
let turn = "X"
// FUNCTION TO CHANGE THE TURN

const ChangeTurn = ()=>{
    return turn ==="X"? "0": "X"
}

//FUNCTION TO CHECK FOR A WIN

const checkWin = ()=>{

}

////game logic
//let boxes = document.getElementsByClassName("box");
//Array.from(boxes).forEach(element =>{
   /// let boxtext = element.querySelector('.boxtext');

    //if(boxtext.innertext === ''){
      //  boxtext.innertext = turn;
      //  turn = ChangeTurn();
       //// checkWin();
       // if(!isgameover){
    
        
       // document.getElementsByClassName("info")[0].innertext = "Turn for" + turn;
       // }
    
    
   // }
//})///

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

