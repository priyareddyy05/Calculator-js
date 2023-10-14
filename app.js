let cal=document.getElementById("input")

function show(num){
    // output.value =num
    cal.value +=num
}
function calculate(){
    try{
        cal.value=eval(cal.value)
    }
    catch{
        cal.value="Error!!" 
    }
    
}
function  clr(){
    cal.value= ""
}
function  remove(){
    cal.value=cal.value.slice(0,-1)
}