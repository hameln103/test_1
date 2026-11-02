const { clear } = require('console');
const fs = require('fs');

const arr = [10, 20, 30, 40, 50];
let index = 0;

const timer = setInterval(() => {
    console.log(arr[index]);
    index++;
    if(index === arr.length){
        clearInterval(timer);
    }
}, 1000);


