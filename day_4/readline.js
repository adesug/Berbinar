var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', (answer1) => {
  rl.question('Masukkan angka kedua: ', (answer2) => {
    console.log(answer1 + answer2)
    rl.close()
  })
})
// input di terminal bisa dibuat looping dengan rekursif
var recursiveAsyncReadLine = function () {
  rl.question('Command: ', function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    log('Got it! Your answer was: "', answer, '"');
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow


// untuk memasukkan inputan di terminal bisa menggunakan package berikut
// process.argv => built-in 
// readline => built-in
// prompt => npm
// inquirer => npm
// commander => npm
// yargs => npm

// recursive readline https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js 