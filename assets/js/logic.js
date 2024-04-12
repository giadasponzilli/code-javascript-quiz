// High scores are listed, sorted highest to lowest (retrieved from local storage)
// User has option to take the quiz again

document.addEventListener("DOMContentLoaded", function () {
  const orderedList = document.querySelector("#highscores");
  const highscoresParsedList = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // Parsing all the value into numbers ready to be sorted
    highscoresParsedList.push({ key: key, value: parseInt(value) });
  }

  // Sorting the highscores highest to lowest 
  highscoresParsedList.sort((a, b) => b.value - a.value)

  // Iterating to create a list of the key and value stored in local storage on the HTML
  highscoresParsedList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.key + " - " + item.value;
    orderedList.appendChild(li);
  });

  // If the user presses the clearButton, both the local storage and the list in the HTML will be emptied
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", function () {
  localStorage.clear();
  orderedList.textContent = "";
  })
});