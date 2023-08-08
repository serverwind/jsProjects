const BUTTON_CHECK = document.getElementById("submit");

BUTTON_CHECK.addEventListener("click", checkWord);

function checkWord() {
  let input_word = document.getElementById("inputWord").value;
  input_word = input_word.toLowerCase();
  let wordLen = input_word.length;
  let reverse = "";

  for (let i = wordLen - 1; i > -1; i--) {
    reverse += input_word[i];
  }
  showResult(input_word, wordLen, reverse);
}

function showResult(input_word, wordLen, reverse) {
  const result = document.getElementById("result");

  if (wordLen < 3) {
    result.innerHTML = `Please type a word longer (at least 3 char.)!`;
  } else if (input_word == reverse) {
    result.innerHTML = `The word <b>${input_word}</b> is a palindrome!`;
  } else {
    result.innerHTML = `The word <b>${input_word}</b> is not a palindrome!`;
  }
}
