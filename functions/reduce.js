function sumOfSquares(numbers) { //declare function/element
  return numbers.reduce((accumulator, number) => { //
    return accumulator + number * number;
  }, 0); 
}

let array = [3, 5, 7]; // square each elements
console.log(sumOfSquares(array)); // => 83