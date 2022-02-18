// let nama = 'Khalif'

// let namaTeman = nama
// console.log(namaTeman + ' print namaTeman pertama')
// console.log(nama + ' print nama pertama')

// namaTeman = 'Andika'
// console.log(namaTeman + ' print namaTeman kedua')
// console.log(nama + ' print nama kedua')

/**
 * Untuk object dan array, akan terjadi peristiwa copy-by-reference
 */
let friends = ['Dhimas', 'Alvani', 'Ade']

let arr_of_friends = [...friends]
console.log(arr_of_friends + ' print arr_of_friends pertama')
console.log(friends + ' print friends pertama')

arr_of_friends.push('Adi')
console.log(arr_of_friends + ' print arr_of_friends kedua')
console.log(friends + ' print friends kedua')


// process.argv