function clr(){
    document.getElementById("Result").value="";
}

function display(val){
    document.getElementById("Result").value+=val;

}

function evalute(){
    let x = document.getElementById("Result").value;
    let y = eval(x);
    document.getElementById("Result").value = y;
}