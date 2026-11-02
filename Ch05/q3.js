const arr = [10, 20, 30, 40, 50];

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// 배열의 요소를 하나씩 출력
async function printArray() {
    for(const value of arr) {
        await delay(1000);
        console.log(value);
    }
    console.log('출력 완료');
};

printArray();