// Write your code below this line.
function luckyNumbers(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        let x = (Math.floor(Math.random() * 10 + 1));
        if(arr.includes(x) === true){
            i = i-1;
        } else{
            if(x > 10 === false){
                arr.push(x);
            }
        }
        
    }
    return arr;
}
console.log(luckyNumbers(7));

// This one contains an array with numbers already set 

const luckyNumber = (num) => {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let luckies = [];

    for(let i = 0; i < num; i++){
        let tempNum = Math.floor(Math.random() * numberArray.length);
        console.log(tempNum);
        luckies.push(numberArray.splice(tempNum, 1));
        console.log(luckies);
    }
    return luckies
}

console.log(luckyNumber(3));

/*function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}


console.log(generateUniqueRandom(1,9))*/

//_____________________________________
/*function randomNum(n){
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr.push( Math.floor(Math.random() * 10 + 1));
    }
    return arr;
}

console.log(randomNum(10));*/

/*var nums = [1,2,3,4,5,6,7,8,9,10],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
console.log(ranNums.next().value);*/