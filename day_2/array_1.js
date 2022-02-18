const friends = ['Teguh', 'Annisa','Febryan', 'Nia', 'Lifan', 'Nabila']

const friends_2 = ['Farhan', 'Ammar', 'Atika']

// console.log(friends[1])
// console.log(friends_2[2])

// spread operator
const new_friends = [...friends, ...friends_2]
console.log(new_friends)

// const new_new_friends = [...friends_2, 'Dhimas']

// console.log(new_new_friends)
// friends_2.push('Dhimas')
// console.log(friends_2)

// friends.unshift('Mikhail')
// console.log(friends)

// const new_friends = friends.slice(1, 4)
// console.log(new_friends)

//console.log(friends[friends.length-1])
// console.log(friends.slice(-1)[0])