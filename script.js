
let displaybtn=document.getElementById('btn');


function calcValue(){
    let ht=document.getElementById('height-input').value;
    let wt=document.getElementById('weight-input').value;
    let r= (wt/(ht*ht))*10000;
    if(r<18.5){
        document.getElementById('img').src='devastated.jpg';
    }
    else if(r>24.9){
        document.getElementById('img').src='average.jfif';
    }
    else{
        document.getElementById('img').src='happy.jfif';
    }
    document.getElementById('result-box').value=r;
}
displaybtn.addEventListener('click', calcValue);


