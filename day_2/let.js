/**
 * Variable let
 * 
 * Variable let memiliki beberapa sifat, yaitu:
 * -  dapat membuat block scope
 * -  bisa di-reassign tapi tidak bisa re-declare dalam scope yang sama
 * -  terjadi hoisting (dalam keadaan tertentu)
 */

/**
 * variable e dideklarasikan di dalam local scope, saat di console.log di luar scope, variable e
 * tidak bisa diakses karena let cakupannya local scope
 */
// if (true) {
//   let e = 'Hello World'
// }

// console.log(e)


/**
 * variabel diskon dideklarasikan di global scope, namun ketika ada "deklarasi ulang" pada variabel diskon di dalam
 * local scope, maka variabel tersebut hanya bisa diakses di dalam scope tersebut
 *  */

// let diskon = 500
// if (true) { // Tanda awal scope
//  let diskon = 300 // Hanya bisa diakses di dalam scope
//  console.log(diskon) // Output: 300
// } // Tanda akhir scope
// console.log(diskon) // Output: 500

/**
 * Variabel yang dideklarasikan global, bisa diakses dalam local scope
 */
let animal = 'Cat'

function sayAnimal() {
  console.log(animal) // Output: 'Cat'
  let animal;
}

sayAnimal()


/**
 * Pada kodingan di bawah, output yang dihasilkan adalah ReferenceError karena pada function sayAnimal ada deklarasi variabel animal sehingga console.log() pada line 137, akan merefer ke variabel yang dideklarasikan di dalam function sayAnimal, dan variable let tidak dapat di-hoisting pada engine Javascript
 */

// let animal = 'Cat'

// function sayAnimal() {
//   console.log(animal) // Output: 'ReferenceError'
//   let animal;
// }

// sayAnimal()



