function num(val){
    document.getElementById('screen').value += val;
}
function equal(){
    let Input = document.getElementById('screen').value;
    let Output = eval(Input);
    document.getElementById('screen').value = Output;
}

function clr(){
    document.getElementById('screen').value = '';
}