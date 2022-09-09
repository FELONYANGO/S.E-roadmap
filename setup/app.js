let  value= 0;

const values=document.querySelector("#value")
const btns=document.querySelector('.btn');


btns.forEach(function(btn) {
    btn.addEventListener("click",function(e){
        const stsyless=e.currentTarget.classList;
        if(stsyless.contains('decrease')){
            value--;
        }
        else if(stsyless.contains('reset')){
            value =0;
        } else if(stsyless.contains('reset')){
            value ++;
        
        }
       values.textContent = value;
    
    
    });
    
});
