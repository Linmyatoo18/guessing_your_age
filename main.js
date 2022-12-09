
let age;
let txt = "You are ";
let years = " years old";
let year = " year old";

document.getElementById("submit").onclick = function(){
    age = document.getElementById("input").value;
    console.log(age);
    
    if(age > 1){
        window.alert(txt + age + years);
    }
    else if(age == 1){
        window.alert(txt + age + year);
    }
    else{
        window.alert("Invalid input!");
    }

}
