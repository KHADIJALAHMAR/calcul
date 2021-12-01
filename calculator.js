// varibles
var input = document.getElementById("input");

var opperator = "";
var num1;
var num2;
var resulta, result;

// function 

function operator(op){
    // console.log('opperator',opperator)
    // console.log('result',result)

    if(!opperator && !result){
        num1 = input.value;
        // console.log(num1)
    }else{
        num1 = result;
    }
    opperator = op;
    input.value = "";
}
function ClearScreen(){
    input.value ="";
}
function display(c){
        input.value +=c;
}

function resulta(){
    
    num2 = input.value;
    if(opperator == "+"){

        console.log(num1 + num2);
        result =( parseFloat(num1) + parseFloat(num2));
        input.value =  result;
        
    } else if (opperator == "-"){
        result =( parseFloat(num1) - parseFloat(num2));
        input.value =  result;


    }else if(opperator == "*"){
        result =( parseFloat(num1) * parseFloat(num2));
        input.value =  result;
    }else if(opperator == "/"){
        result =( parseFloat(num1) / parseFloat(num2));
        input.value =  result;
    }
}

