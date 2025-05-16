function generatePoem(event) {
  event.preventDefault();

    
   
new Typewriter('#poem', {
  strings: " The flowers bloom in the spring, <br> The birds begin to sing, <br> The sun shines bright and warm, <br> Nature awakens from its dorm. <br> The trees are green and full of life, <br> A time for joy, a time for strife. <br> The world is fresh and new again, <br> A season of hope, a season of zen. <br>",
  autoStart: true,
  delay: 1,
  cursor:""
});
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem); 