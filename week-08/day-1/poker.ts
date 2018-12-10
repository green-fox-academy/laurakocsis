export class Cards {
  private white: string[] = [];
  private black: string[] = [];
  private suit = ['C', 'D', 'H', 'S'];
  private value = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  giveCards() {
    let cardList = [];
    for (let i = 0; i < this.suit.length; i++) {
      for (let j = 0; j < this.value.length; j++) {
        cardList.push(this.suit[i] + this.value[j]);
      }
    }
    for (let k = 0; k < 5; k++) {
      let randomCardIndex = Math.floor(Math.random() * cardList.length);
      this.white.push(cardList[randomCardIndex]);
      cardList.splice(randomCardIndex, 1);
      randomCardIndex = Math.floor(Math.random() * cardList.length);
      this.black.push(cardList[randomCardIndex]);
      cardList.splice(randomCardIndex, 1);
      console.log(cardList);
    }
  }

  getWhite() {
    return this.white;
  }

  getBlack() {
    return this.black;
  }
}

const newGame = new Cards();
newGame.giveCards()

console.log(newGame.getWhite());
console.log(newGame.getBlack());