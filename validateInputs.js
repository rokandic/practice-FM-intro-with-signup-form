let form = document.getElementsByTagName('form')[0];
form.onsubmit = validateInputs;

let inputs = document.getElementsByTagName('input');

for( let input of inputs) {
  input.onfocus = focusInput;
};

function focusInput(event) {
  let input = event.target;
  input.classList.remove('input-invalid');
}

function validateInputs(event) {
  event.preventDefault();
  
  let everythingValid = true;

  let inputs = document.getElementsByTagName('input');
  for (let input of inputs) {
    let inputValid = true;
    if(input.id=="email") {
      let email = input.value;
      let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;  
      let validEmail = regex.test(email);
      if(!email || !validEmail) 
        inputValid = false;        
    }
    else if(input.value.length<1) 
      inputValid = false;

    if (!inputValid) {
      input.classList.add('input-invalid');
      everythingValid = false;
    }
  }  
  form.focus();

  if (everythingValid) {
    for( let input of inputs) {
      input.value = "";
    }
  }
}