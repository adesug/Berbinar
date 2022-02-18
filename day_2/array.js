const BE_JS_2 = [
  {
    name: 'Alvani',
    hobbies: ['Nonton film', 'futsal', 'baca komik'],
    music_genre: 'Pop'
  },
  {
    name: 'Adi',
    hobbies: ['Sepedaan', 'Nge-game', 'Ngoding'],
    music_genre: 'Pop'
  },
  {
    name: 'Nico',
    hobbies: ['Nonton film'],
    music_genre: 'Pop'
  },
  {
    name: 'Andika',
    hobbies: ['Main game', 'futsal', 'nonton film'],
    music_genre: 'Metal'
  }
]

// mengakses hobi Alvani
console.log(BE_JS_2[0].hobbies)


// mengakses hobi Andika yang bermain futsal
console.log(BE_JS_2[3].hobbies[1])

// menambahkan hobi dari Nico dengan main game

BE_JS_2[2].hobbies.push('main game')
// console.log(BE_JS_2[2])