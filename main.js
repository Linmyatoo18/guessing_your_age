
let age;
let txt = "You are ";
let years = " years old";
let year = " year old";
let emoji = "💀";

document.getElementById("submit").onclick = function(){
    age = document.getElementById("input").value;
    console.log(age);
    
    if(age > 1){
        window.alert(txt + age + years + emoji);
    }
    else if(age == 1){
        window.alert(txt + age + year + emoji);
    }
    else{
        window.alert("Invalid input!" + emoji);
    }

}
