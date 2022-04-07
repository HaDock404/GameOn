function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//check user input



const patterns = {
  first: /^[a-z]{2,25}$/i,
  last: /^[a-z]{2,25}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  birthdate: /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/i,
  challenge: /^[0-9]{1,2}$/,
};

/*function validate(tag, regex){
  const p = document.querySelector('p');

  if(regex.test(tag.value)){
      tag.className = 'valid';
      p.classname = 'valid';
  } else {
      tag.className = 'invalid';
      p.classname = 'invalid';
      document.registration.name.focus();
  }

}*/

//const inputs = document.querySelectorAll('input');

/*inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
          //console.log(patterns[e.target.attributes.name.value]);
          validate(e.target, patterns[e.target.attributes.name.value]);
  });
});*/

//Validate user input and start "c'est parti"
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;



function testFirst() {
  const prenom = document.getElementById('first').value;
  const p = document.getElementById('premier');  

    if (patterns.first.test(prenom)) {
      p.className = 'valid';
      return a = 1;
    } else {
      p.className = 'invalid';  
      return a = 0;   
    } 
  }

  function testLast() {
    const nom = document.getElementById('last').value;
    const p = document.getElementById('deuxieme');

    if (patterns.last.test(nom)) {
      p.className = 'valid';
      return b = 1; 
    } else {
      p.className = 'invalid';
      return b = 0;
    } 
  }
  
  function testEmail() {
    const mail = document.getElementById('email').value;
    const p = document.getElementById('troisieme');
    const i = 0;

    if (patterns.email.test(mail)) {
      p.className = 'valid';
      return c = 1;  
    } else {
      p.className = 'invalid';
      return c = 0; 
    } 
  }

  function testDate() {
    const date = document.getElementById('birthdate').value;
    const p = document.getElementById('quatrieme');
    const i = 0;

    if (patterns.birthdate.test(date)) {
      p.className = 'valid';
      return d = 1;  
    } else if (date == '') {
      p.className = 'invalid';
      return d = 0;   
    } 
  }

  function testParticipate() {
    const participate = document.getElementById('quantity').value;
    const p = document.getElementById('cinquieme');
    const i = 0;

    if (patterns.challenge.test(participate)) {
      p.className = 'valid';
      return e = 1; 
    } else if (participate == '') {
      p.className = 'invalid';
      return e = 0;    
    } 
  }

  function testCity() {
    const cityChecked = document.querySelector('input[name=location]:checked');
    const p = document.getElementById('sixieme');

    if (cityChecked != null) {
      p.className = 'valid';
      return f = 1;
    } else {
      p.className = 'invalid';
      return f = 0;
    } 
  }

  function testCondition() {
    const conditionChecked = document.getElementById('checkbox1').checked;
    const p = document.getElementById('septieme');

    if (conditionChecked == false) {
      p.className = 'invalid';
      return g = 0; 
    } else {
      p.className = 'valid';
      return g = 1;
    } 
  }

function validation() {

  let sum = 0;

  testFirst();
  testLast();
  testEmail();
  testDate();
  testParticipate();
  testCity();
  testCondition();

  sum = a + b + c + d + e + f + g;
  
  if (sum > 6) {
    modalBody.removeChild(form);
    modalBody.innerHTML = `<div class="innerContent">Merci pour <br> votre inscription</div><div class="button buttonStyle" onclick="closeModal();">Fermer</div>`;
    return true;
  } else if (sum <= 6){
    console.log(sum)
    return false;
  }

}
