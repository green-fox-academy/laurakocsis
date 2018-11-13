// Create a PostIt a class that has
  // a backgroundColor
  // a text on it
  // a textColor
// Create a few example post-it objects:
  // an orange with blue text: "Idea 1"
  // a pink with black text: "Awesome"
  // a yellow with green text: "Superb!"


  class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor, text, textColor) {
      this.backgroundColor = backgroundColor;
      this.text = text;
      this.textColor = textColor;
    }
  }

  let obj1 = new PostIt('orange', 'Idea1', 'blue');
  let obj2 = new PostIt('pink', 'Awesome', 'black');
  let obj3 = new PostIt('yellow', 'Superb!', 'green');
  