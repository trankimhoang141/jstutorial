const $ = (value) => {
  return document.getElementById(value);

};
const getByName = (value) => {
  return document.getElementsByName(value);

};

const registerbtn = document.getElementById('registerbtn');
registerbtn.setAttribute("disabled", "");

registerbtn.addEventListener('click', () => {
  // validate email 
  const emailInput = document.getElementById('emailInput');
  const emailMSG = document.getElementById('emailMSG');

  if (emailInput.value.indexOf('@') === -1) {
      emailMSG.innerHTML = "  <span class =  'text-danger'> email không hợp lệ </span>  ";
  } else {
      emailMSG.innerHTML = "  <span class =  'text-success'> ok  </span>  ";
  }

  const phoneInput = $('phoneInput');
  const phoneValue = phoneInput.value;
  const reExPattern = /^(0[0-9][0-9]{8})$/;

  if (!reExPattern.test(phoneValue)) {
      $('phoneMSG').innerHTML = "  <span class =  'text-danger'> SĐT không hợp lệ </span>  ";
  } else {
      $('phoneMSG').innerHTML = "  <span class =  'text-success'> ok  </span>  ";
  }

  const citySelect = $('citySelect');
  if (citySelect.value === "0") {
      $('city').innerHTML = "  <span class = 'text-danger'> điền lại nào </span>  ";

  } else {
      $('city').innerHTML = "  <span class = 'text-success'> ok  </span>  ";

  }

});
const acceptCheckbox = $("acceptCheckbox");
acceptCheckbox.addEventListener('click', () => {
  if (acceptCheckbox.checked) {
      registerbtn.removeAttribute("disabled");
  }
  if (!acceptCheckbox.checked) {
      registerbtn.setAttribute("disabled", "");
  }
});
const resetbtn = $("resetbtn");
resetbtn.addEventListener('click', () => {
  $("registerform").reset();
  $("emailMSG").innerHTML = "";
  $("phoneMSG").innerHTML = "";
  $("countryMSG").innerHTML = "";
});