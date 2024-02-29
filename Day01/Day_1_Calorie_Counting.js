const fs = require("fs");
const data = fs
  .readFileSync(
    "C:/Users/lloyd/Desktop/coding/web development/Advent of code 2022/Day01/input.txt",
    "utf-8"
  )
  .trim()
  .split("\n");

//format removed any \r beside the numbers, while leaving the \r's that stand alone  
const format = data.map(splitArr);

function splitArr(element) {
  return element.replace(/(?<=\d)\r/g, "");
}
//stops replaces all of the solo \r's with the word STOP. 
const stops = format.map(createStops);

function createStops(element) {
  return element.replace(/\r/g, "STOP");
}

//sums numbers and compares it to the highestCals number. if it is bigger, it replaces it. nums are compared when STOP is reached
function partOne(){
    let highestCals = 0
    let sum = 0

    for(x=0;x<stops.length;x++){
        if(stops[x] !== 'STOP'){
            let number = parseInt(stops[x], 10)
            sum += number
        }
        else{
            if(sum > highestCals){
                highestCals = sum
                sum = 0
            }
            else{
                sum = 0
            }
        }
    }
    console.log(highestCals)
}

//instead of a highestCals, this function puts every sum into its own list, sorts it in descending order, and returns sum of top 3
function partTwo(){
    let sums = []
    let sum = 0
    for(x=0;x<stops.length;x++){
        if(stops[x] !== 'STOP'){
            let number = parseInt(stops[x], 10)
            sum += number
        }
        else{
           sums.push(sum)
           sum=0 
        }
    }
  const sorted = sums.sort((a,b) => b - a)
  console.log(sorted[0] + sorted[1] + sorted[2])
}
partTwo()