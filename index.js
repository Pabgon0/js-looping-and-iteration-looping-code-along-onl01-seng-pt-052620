function writeCards(names, event) {
  let cards_array = []
  for (let i = 0; i < names.length; i++) {
    cards_array << `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }
  return cards_array;
}