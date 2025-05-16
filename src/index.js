function displayPoem(response) {

new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:""
});

}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "bd13391t3d87a406o7b70e7f7fa17f8e";
  let prompt = `User instruction: Generate a french poem about ${userInput.value}`;    
  let context = "You are a romantic poem expert and love to write short poems. Your mision is to generate a 4 line poem in basic format and separate each line with a <br/>. Make sure to follow the user instructions and sign at the end of the poem with 'Shecodes AI' in <strong> tag."; 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink">⏳Generating your poem about ${userInput.value}...<div/>`;
axios.get(apiUrl).then(displayPoem);


}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem); 