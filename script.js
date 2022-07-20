let turn = "x";

let play = "true";
let boxes = document.getElementsByClassName("box");
let tochangevalue = " ";
let imgBox = document.getElementById("imgBox");
let arrayForWinner = ['','','','','','','','',''];
const changeturn = ()=>{
    return turn === "x"?"0":"x";
}
// function removehide(){
//     document.getElementsByClassName('imgBox').classList.remove = 'hidden';
// }
// for (i = 0; i < arrayForWinner.length; i++) {
//     console.log(arrayForWinner[i]);
//   } 




const checkwin = ()=>{
    // for (i = 0; i < arrayForWinner.length; i++) {
    //     console.log(arrayForWinner[i]);
    //   } 

if(arrayForWinner[0] === arrayForWinner[1] && arrayForWinner[1] === arrayForWinner[2] ){
   if(arrayForWinner[0] !='' && arrayForWinner[1]!='' && arrayForWinner[2]!=''){
    imgBox.style.visibility = 'visible';

  document.getElementById("zero").classList.add("bgDark");
  document.getElementById("one").classList.add("bgDark");
  document.getElementById("two").classList.add("bgDark");
    // document.getElementsByClassName("info")[0].innerText = "winner";
    // document.getElementsByClassName("info")[0].classList.add('winner');
    document.getElementsByClassName("info")[0].style.visibility = "hidden";
    play = "false";
    // alert("press to contiune");
    Array.from(boxes).forEach(element=>{
        let boxText = element.querySelector(".boxContainer");
        if(boxText.innerText == '')
        {
            boxText.innerText = '-';
        }
    })
//  document.body.removeEventListener('click', remove());
    // removehide();
//    d.classList.remove = "hidden";
    // ourGif.classList.remove("hidden");
    console.log("winner");
//     if(play === "false")
// {
     
// Array.from(boxes).forEach(e=>{
//     e.removeEventListener('click', remove());
// })
// function remove(){
        
//     console.log("removed");
//  }

// }

   }
        
    }
   
    

if(arrayForWinner[3] === arrayForWinner[4] && arrayForWinner[4] === arrayForWinner[5] && arrayForWinner[3]!=null ){
    if(arrayForWinner[3] !='' && arrayForWinner[4]!='' && arrayForWinner[5]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("three").classList.add("bgDark");
        document.getElementById("four").classList.add("bgDark");
        document.getElementById("five").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
        console.log("winner");
       }
          
    };
   
    // console.log("winner");

if(arrayForWinner[6] === arrayForWinner[7] && arrayForWinner[7] === arrayForWinner[8] && arrayForWinner[6]!=null ){
    if(arrayForWinner[6] !='' && arrayForWinner[7]!='' && arrayForWinner[8]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("six").classList.add("bgDark");
        document.getElementById("seven").classList.add("bgDark");
        document.getElementById("eight").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
         
        console.log("winner");
       }
   
    // console.log("winner");
}
if(arrayForWinner[0] === arrayForWinner[3] && arrayForWinner[3] === arrayForWinner[6] && arrayForWinner[0]!=null ){
    if(arrayForWinner[0] !='' && arrayForWinner[3]!='' && arrayForWinner[6]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("zero").classList.add("bgDark");
        document.getElementById("three").classList.add("bgDark");
        document.getElementById("six").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
        console.log("winner");
       }
}
if(arrayForWinner[1] === arrayForWinner[4] && arrayForWinner[4] === arrayForWinner[7] && arrayForWinner[1]!=null ){
    if(arrayForWinner[1] !='' && arrayForWinner[4]!='' && arrayForWinner[7]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("one").classList.add("bgDark");
        document.getElementById("four").classList.add("bgDark");
        document.getElementById("seven").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
         
        console.log("winner");
       }
}
if(arrayForWinner[2] === arrayForWinner[5] && arrayForWinner[5] === arrayForWinner[8] && arrayForWinner[2]!=null ){
    if(arrayForWinner[2] !='' && arrayForWinner[5]!='' && arrayForWinner[8]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("two").classList.add("bgDark");
        document.getElementById("five").classList.add("bgDark");
        document.getElementById("eight").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
        console.log("winner");
       }
   
}
if(arrayForWinner[0] === arrayForWinner[4] && arrayForWinner[4] === arrayForWinner[8] && arrayForWinner[0]!=null ){
    if(arrayForWinner[0] !='' && arrayForWinner[4]!='' && arrayForWinner[8]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("zero").classList.add("bgDark");
        document.getElementById("four").classList.add("bgDark");
        document.getElementById("eight").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
         
        console.log("winner");
       }
}
if(arrayForWinner[2] === arrayForWinner[4] && arrayForWinner[4] === arrayForWinner[6] && arrayForWinner[2]!=null ){
    if(arrayForWinner[2] !='' && arrayForWinner[4]!='' && arrayForWinner[6]!=''){
        imgBox.style.visibility = 'visible';

        document.getElementById("two").classList.add("bgDark");
        document.getElementById("four").classList.add("bgDark");
        document.getElementById("six").classList.add("bgDark");
          // document.getElementsByClassName("info")[0].value = "winner";
          // document.getElementsByClassName("info")[0].classList.add('winner');
          document.getElementsByClassName("info")[0].style.visibility = "hidden";
          
          Array.from(boxes).forEach(element=>{
            let boxText = element.querySelector(".boxContainer");
            if(boxText.innerText == '')
            {
                boxText.innerText = '-';
            }
        })
        console.log("winner");
       }
}




}

// function stopad(){
//         if(play === "false")
// {
     
// Array.from(boxes).forEach(e=>{
//     e.removeEventListener('click', remove());
// })
// function remove(){
        
//     console.log("removed");
//  }

// }
// }


if(play === "true"){



Array.from(boxes);
for (let index = 1; index < boxes.length; index++){
    // boxes[index] == " ";
     boxes[index].setAttribute("data-index",index);
    // console.log(boxes[index]);
  
}

Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxContainer");
    element.addEventListener('click',()=>{
        
        if(boxText.innerText === '')
        {
            let printSome = element.getAttribute('data-index');
            console.log("index is ",printSome);
            // tochangevalue = printSome;
            if(printSome==null)
            {
                arrayForWinner[0] = turn;    
            }
            arrayForWinner[printSome] = turn;
            boxText.innerText = turn;
            turn = changeturn();
            checkwin();
            document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;

        }
    
        
        // arrayForWinner[tochangevalue] == turn;
//     for (i = 0; i < arrayForWinner.length; i++) {
// if(i === tochangevalue)
// {
    // arrayForWinner.insert(tochangevalue,"x");

    // arrayForWinner[i] = "x";
    // console.log(turn);
// }

   
//   }

          
    })
})

}

let resetButton = document.getElementById("reset");
resetButton.addEventListener('click',()=>{
    Array.from(boxes).forEach(element=>{
        element.classList.remove("bgDark");
        let boxText = element.querySelector(".boxContainer");
        boxText.innerText = '';
        document.getElementsByClassName("info")[0].style.visibility = "visible";
        arrayForWinner = ['','','','','','','','',''];
        imgBox.style.visibility = 'hidden';
        play = "true";


          
     
        
    })
})




// game logic

// let boxes = document.getElementsByClassName("box");
