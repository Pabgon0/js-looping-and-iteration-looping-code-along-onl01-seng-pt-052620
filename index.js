function writeCards(names, event) {
  let cards_array = []
  for (let i = 0; i < names.length; i++) {
    cards_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return cards_array;
}

function countDown(posInt) {
  let i = posInt
  while (i > 0) {
    console.log(`${i}`)
    i--
  }
}