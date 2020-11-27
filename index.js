function writeCards(names, event) {
  let cards_array = []
  for (i = 0; i < names.length; i++) {
    cards_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return cards_array;
}