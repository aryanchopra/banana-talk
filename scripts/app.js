var inputbox = document.querySelector(".input-text");

var translateBtn = document.querySelector(".btn-translate");

var outputbox = document.querySelector(".output-text");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return url + "?text=" + text;
}
translateBtn.addEventListener("click", () => {
  console.log("clicked");
  var text = inputbox.value;

  fetch(constructUrl(text))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      outputbox.innerText = translated;
    })
    .catch((err) => {
      alert(
        "Oops! Looks like the server isn't responding. Please check back a while later!"
      );
    });
});
