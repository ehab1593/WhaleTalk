 let input = 'Hi I am a whale and I talk whale'
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (i =0; i < input.length; i++) {
  if(input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (j=0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
     resultArray.push(input[i]);
    }
  }
}

resultString = resultArray.join('').toUpperCase();

console.log(resultString);
