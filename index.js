// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var blocks = [1, 5, 5, 2, 6];
function solution(blocks) {
    // write your code in JavaScript (Node.js 8.9.4)
    const smollest = findSmoolest()
    console.log(smollest)
    const smollestIndex = findIndex(smollest);
  console.log(smollestIndex)
  
  
  const biggest = findBiggest()
  console.log(biggest)
    const biggestIndex = findIndex(biggest);
  console.log(biggestIndex)
  
  if(smollestIndex == 0) {
        return (biggestIndex - smollestIndex) + 1;
    }else {
        let index2 = biggestBeforeSmoll(smollest, smollestIndex);
        let secondIndex = index2 < 0 ? 0 : index2; 
        let firstDistant = (biggestIndex - smollestIndex) + 1;
        let secondDistant = (smollestIndex - secondIndex) + 1;
        return firstDistant + secondDistant;
    }

}

function findSmoolest() {
    return Math.min(...blocks);
}
function findBiggest() {
    return Math.max(...blocks);
}

function biggestBeforeSmoll(cur, smollestIndex) {
    let secondBiggestIndex = 0;
  // console.log('cur:', cur)
  // console.log('smollestIndex:', smollestIndex);
  
  
    for(var j=smollestIndex; j>= 0; j--) {
      // console.log('j:',j)
      // console.log('block: ',blocks[j])
         
        if(blocks[j]> cur) {
            return j-1; 
         }
    }
}

function findIndex(num) {
    return blocks.findIndex(item => item == num);
}


const result = solution(blocks);
console.log('Result:', result)