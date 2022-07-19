var button = document.getElementById('change');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var put = document.getElementById('put').value;
    for (let i = 0; i < put.length; i++){
        document.write(put[i] + "<br />");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('put').value = '';
});