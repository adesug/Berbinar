'use strict'
/**
 * Variable var
 * 
 * Variable var memiliki beberapa sifat, yaitu:
 * -  global scope dan local scope (menggunakan function)
 * -  bisa di-reassign dan re-declare
 * -  hoisting
 */

/**
 * variable a dideklarasikan di dalam local scope, namun saat di console.log di luar scope, variable a
 * masih bisa diakses karena var cakupannya global scope
 */
// if (true) {
//   var a = 'Hello World'
// }

// console.log(a)


/**
 * Variabel b dideklarasikan di dalam local scope, namun tidak seperti variabel a di atas, variabel b tidak dapat diakses di luar function helloWord, dikarenakan saat kita membuat function, function tersebut akan membuat scope tersendiri yang sifatnya local dan akan mengisolasi semua variabel yang ada di dalamnya
 */
// function helloWord() {
//   var b = 'hello'
// }

// console.log(b)


/**
 * Variabel c dapat di-reassign dan re-declared
 */

// var c = 'Khoirul'
// console.log(c)
// c = 'Atika'
// console.log(c)

// var c;
// console.log(c)

/**
 * Variabel d dapat terjadi hoisting
 */

// d = 'Syafiq'
// var d;
// console.log(d)

