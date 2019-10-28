
$(document).ready(function() {
  $('.sentenceForm').submit(function(event){
    console.clear();
    event.preventDefault();
    var sentence = $('input#sentence').val();
    var words = sentence.split(' ')
    var bigWords = words.map(function(word){
      if (word.length >= 3) {
        return word;
      } else {
        console.log('"' + word + '" was erased');
      }
    });
    bigWords.reverse();
    $('#output').text(bigWords.join(' '));

  });
});
