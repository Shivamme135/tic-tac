let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbutton = document.querySelector(".new-btn");
let messagecontainer = document.querySelector(".msg-container");
let msessage = document.querySelector(".text");
let drawcontainer = document.querySelector(".draw-mes");
let drawmessage = document.querySelector(".draw");
// here we make variable which is used to check wheter the turn will be o or x

let turn0 = true; // 2 player playerx and palyero means if true so print 0 and if false then print X

// 2d array [[],[],[]]
// now we store all the winning patterns in an array
  let count = 0;
let drawone = ()=>{
    count++;
    if(count===9)
    {
        count = 0;
        drawmessage.innerText;
        drawcontainer.classList.remove("hide1");
    }
}
   

let winPatterns = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

//function to reset the game

// it trigger when we click on the reset btn
const resetGame =()=>
{
    turn0 = true;
    enableBoxes();
    messagecontainer.classList.add("hide");
    drawcontainer.classList.add("hide1");
}
// now we add event lishner in the boxes


// THIS PART IS FOR CLICKING ON THE BOX AND WHAT WILL PRINT 

boxes.forEach((box)=>
{
  box.addEventListener("click",()=>{
    // console.log("box was clicked");
    // but we want if click then box will insert 0 or x 

    if(turn0===true)
    {
        box.innerText = "O";
        turn0 = false; 
        // drawone();  
    }
    else{
        box.innerText = "X";
        turn0 = true;  
        // drawone(); 
    }
    // but problem is when we click on one of the box then when we again cliick on it wiil change
    box.disabled = true;
   winnnerCheck(); 
   drawone();
  })
})

// here we make the function because after display winner we cannot able to access any button
let disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
let enableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}


//here we make functionn to show the  winner text in the page

let showWinner = (winner)=>{
     msessage.innerText = `congratulation , winner is player ${winner}`;
     messagecontainer.classList.remove("hide");
     disableBoxes();
}
// now we have to make function for winner check and call it  inside types one 

let winnnerCheck = ()=>{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // this is for the printing draw
        

        if(pos1Val !== "" && pos2Val !=="" && pos3Val !=="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                count = 0;
                setTimeout(() => { showWinner(pos1Val) }, 2000)
               
            }
        }
        
    }
}

newbutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);