console.log("inside the engine");


let oneWay = document.getElementById("oneway");
let round = document.getElementById("rtn");
 
oneWay.addEventListener('click', ()=>{
    console.log('you have clicked');
    let rtnDate = document.getElementById('input-group1');
    rtnDate.style.display='none';
})
rtn.addEventListener('click', ()=>{
    console.log('you have clicked  on round');
    let rtnDate = document.getElementById('input-group1');
    rtnDate.style.display='block';

})


 
