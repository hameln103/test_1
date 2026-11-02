function displayA() {
    console.log("A");
}

// 2초 동안 실행 : callback
function displayB(callback) {
    setTimeout(() => {
        console.log("B");
        callback();
    }, 2000);
}

function displayC() {
    console.log("C");
}

displayA();
displayB(displayC);