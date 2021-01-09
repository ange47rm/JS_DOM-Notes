// Event driven programming

// 1. Which object will trigger the event? - Set up eventListener(document)
// 2. Which event we want the object to listen for? (DOMContentLoaded - click)
// 3. Callback function to run when the event is triggered (function)

document.addEventListener('DOMContentLoaded', () => {                 // EVENT LISTENER!!!
  // BUTTON //
  const button = document.querySelector("#button");                   // WHAT OBJECT WILL TRIGGER THE EVENT
  button.addEventListener("click", handleClick)                       // LISTEN FOR THIS EVENT AND RUN CALLBACK FUNCTION

  // INPUT //
  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  // SELECT //
  const selectInput = document.querySelector ('#select');             // what we target (CSS id)
  selectInput.addEventListener ('change', handleSelectChange);        // listen for change and run function

  // FORM //
  const theForm = document.querySelector ('#form');
  theForm.addEventListener ('submit', handleFormSubmit);

});

// BUTTON //
// define callback function
const handleClick = function (){
  // Send data server. Now we have to target the element we want to change
  const resultParagraph = document.querySelector('#button-result');           // target the element we want to change
  resultParagraph.textContent = 'That button has definitely been clicked';    
}

// INPUT //
const handleInput = function (event) {                                  // the event object has a property call target. The target triggers the event.
  // 1. Get value from input
  const resultParagraph = document.querySelector('#input-result');
  // 2. Update the paragraph text
  resultParagraph.textContent = `You typed ${event.target.value}`;      // console.log(event.target.value); logs to console whatever is typed in the input
}

// SELECT //
const handleSelectChange = function (selection) {
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You went with: ${selection.target.value}`;
}

// HANDLE FORM SUBMIT //
const handleFormSubmit = function (submission) {
  console.log (this);                                                   // shows the object we're targeting (MUST USE A FUNCTION DECLARATION - NOT ARROW)
  submission.preventDefault();                                          // USEFUL IN FORMS prevents making HTTP GET REQUESTS (aka reloading the page)
  const resultParagraph = document.querySelector("#form-result");
  resultParagraph.textContent = `Your name:
  ${submission.target.first_name.value}
  ${submission.target.last_name.value}`                                 // first_name and last_name are the IDs of the inputs
}