const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//get hte button
const btn = document.getElementById("btn"); 
//select the butoon
const color = document.querySelector(".color");
//functionality of the button on onclick
btn.addEventListener("click",function(){
    //get a random number between the given array
    const randomNumber = getRandomNumber();
//console.log(randomNumber);

    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

