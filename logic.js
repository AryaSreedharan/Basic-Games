let boxes=document.querySelectorAll(".box");
let restartbtn=document.querySelector("#restartBtn");
let statusTxt=document.querySelector("#statusText");
let turn0=true;//reperesent current player
let count=0;
statusTxt.innerText='Current Player : 0';
let msg=document.querySelector(".Msg");
let nwgbtn=document.querySelector("#newgameBtn");
const winningPtrn=
[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    // console.log("box clicked");
    count++;
        if(box.classList.contains("disabled"))
        {
            return;
        }
        if(turn0)
        {
            box.classList.add("Color");
            box.innerText='O';
            turn0=false;
            statusTxt.innerText='Current Player : x';
        }
        else
        {
            box.classList.remove("Color");
            box.innerText='X';
            turn0=true;
            statusTxt.innerText='Current Player : O';
        }
        box.classList.add("disabled");
        let winner= checkWinner();
        if((count=== 9 )&&!winner)
        {
             msg.innerText = `Game was a draw`;
             statusTxt.innerText=`Game Over`;
        }
    });
});
const checkWinner = () =>
{
    for(wnptrn of winningPtrn)
    {
        // console.log(wnptrn);'
        // console.log(boxes[wnptrn[0]].innerText);
        // console.log(boxes[wnptrn[1]].innerText);
        // console.log(boxes[wnptrn[2]].innerText);
        let val1=boxes[wnptrn[0]].innerText;
        let val2=boxes[wnptrn[1]].innerText;
        let val3=boxes[wnptrn[2]].innerText;
        if((val1!="")&& (val2!="")&&(val3!=""))
        {
            if((val1===val2)&&(val2===val3))
            {
                 showWinner(val1);
                // console.log(val1);
                return true;
            }
        }
    }
}
const showWinner = (winner) =>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    console.log(winner);
    disableBox();
    statusTxt.innerText=`Winner : ${winner}`;
    
}
const disableBox=() =>
{
    for(box of boxes)
    {
        box.classList.add("disabled");
    }
}
const restGame=()=>{
    for(box of boxes)
    {
        box.innerText="";
        box.classList.remove("disabled");
    }
    turn0='O';
    msg.innerText="";
}
restartbtn.addEventListener("click",restGame);
nwgbtn.addEventListener("click",restGame);


