const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//get the button
const btn=document.getElementById('btn');
//select the colors
const color=document.querySelector('.color');

//function that is used to iterate within the hexcode on button onclick
btn.addEventListener("click",function(){
   ///loop through array of numebers given
   let hexColor = "#"; 
    for(let i =0 ;i<6 ;i++){
        hexColor +=hex[getRandomNumber()];
    }

//    const randomNumber=getHexcode();
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
  
   
});
//the getHexcode function
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


