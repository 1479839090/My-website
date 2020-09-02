var button=document.getElementById("abc");
var bubble=document.getElementById("bubble");

button.addEventListener("click",appear);

function appear(){
    console.log( bubble.className);
 if(bubble.className=="hidden"){
     bubble.className="bubbles";
 }
 else{
    bubble.className="hidden";
 }
}