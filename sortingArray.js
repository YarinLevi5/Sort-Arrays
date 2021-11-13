let numsBtn = document.querySelectorAll('#btn');
let box1 = document.querySelector('.root1');
let box2 = document.querySelector('.root2');
let box3 = document.querySelector('.root3');
let wrap = document.querySelector('.wrap');
let allArrays = [[],[],[]];

numsBtn[0].addEventListener('click',()=>{
let number = Math.floor(Math.random()*100);
if(number<=30){
allArrays[0].push(number);
box1.innerHTML = `Array one : ${allArrays[0]}`;
}
if(number >= 31 && number <=60){
allArrays[1].push(number);
box2.innerHTML = `Array two : ${allArrays[1]}`;
}
if(number >= 61 && number <= 100){
allArrays[2].push(number);
box3.innerHTML = `Array three : ${allArrays[2]}`;
}
});

// sort

for(let x=0;x<allArrays.length;x++){

numsBtn[1].addEventListener('click',()=>{

for(let i=0; i<allArrays[x].length; i++){

    for(let j=0; j<allArrays[x].length; j++){

     if( allArrays[x][i] < allArrays[x][j] ){

      let temp = allArrays[x][j];
      allArrays[x][j] = allArrays[x][i];
      allArrays[x][i]= temp;
}
}
}
let box4 = document.createElement('div');
box4.classList.add('innerBox')
 box4.innerText += `Sorted array : ${allArrays[x]}`;
 wrap.appendChild(box4);
});
}






 