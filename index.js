const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTitle = [];
  [...tutorials].map(function (title) {
    let wordsArray = title.split(" ");


    wordsArray.map(function(word) {
      for (let index = 0; index < word.length; index++) {
        if (index == 0) {
          word = word[index].toUpperCase() + word.slice(1);
        }
      }
      console.log(word);
      return word;
    });

    console.log(wordsArray);
    return newTitle.push(wordsArray.join(" "));
  });
  return newTitle;
}