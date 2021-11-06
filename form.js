const $ = (element) => {
  return document.getElementById(element);
};
const getByName = (element) => {
  return document.getElementsByName(element);
};

$("fullName").setAttribute("minlength", "6");
$("fullName").setAttribute("maxlength", "50");
$("male").setAttribute("checked", "");
$("address").setAttribute("maxlength", "100");
$("describe").setAttribute("maxlength", "1000");

//name
const validateFullName = () => {
  const fullname = $("fullName");
  const textName = $("textName");
  const regExpPattenFullName = /^[a-z]+([\s]?[a-z]+)*$/gim;
  let check = false;
  if (fullname.value === "") {
    textName.innerHTML =
      '<span class="text-danger">This field is required.</span>';
  } else if (fullname.value.indexOf(" ") === -1) {
    textName.innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
  } else if (!regExpPattenFullName.test(fullname.value)) {
    textName.innerHTML =
      '<span class="text-danger">Only include the alphabetical characters in range: a-z and A-Z</span>';
  } else {
    textName.innerHTML = '<span class="text-success">Good job!</span>';
    check = true;
  }
  return check;
};

//email
const validateEmail = () => {
  const textEmail = $("textEmail");
  const email = $("email").value;
  let check = false;
  const regExpPattenEmail = /^([\w]*[\w\.]*@edu.com.vn)/g;
  if (email === "") {
    textEmail.innerHTML =
      '<span class="text-danger">This field is required.</span>';
  } else if (
    email.indexOf("@") === -1 ||
    email[0] === "@" ||
    email[email.length - 1] === "@"
  ) {
    textEmail.innerHTML =
      '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
  } else if (!regExpPattenEmail.test(email)) {
    textEmail.innerHTML =
      '<span class="text-danger">We only accept educational emails.</span>';
  } else {
    textEmail.innerHTML = '<span class="text-success">Good job!</span>';
    check = true;
  }
  return check;
};

//school
const selectSchool = () => {
  const selectSchool = $("school");
  const textSchool = $("textSchool");
  let check = false;
  if (selectSchool.value === "4") {
    textSchool.innerHTML =
      '<span class="text-danger">Please select School</span>';
  } else {
    textSchool.innerHTML = "";
    check = true;
  }
  return check;
};
//age
const valueAge = () => {
  const age = $("age").value;
  const textAge = $("textAge");
  const showAge = $("showAge");
  showAge.innerHTML = `${age}`;
  if (age <= 30) {
    textAge.innerHTML = '<span class="text-success">You’re still young!</span>';
  } else textAge.innerHTML = "";
};

//favorite
const sportCheckbox = () => {
  const textFavorite = $("textFavorite");
  const sport = getByName("favorite");
  let check = false;
  sport.forEach((element) => {
    if (element.checked) {
      check = true;
    }
  });
  if (!check) {
    textFavorite.innerHTML =
      '<span class="text-danger">You should select at least one option.</span>';
  }
  return check;
};

// your wish
const validateYourWish = () => {
  const yourWish = $("yourWish").value;
  const textYourWish = $("textYourWish");
  let check = false;
  if (yourWish === "") {
    textYourWish.innerHTML =
      '<span class="text-danger">This field is required</span>';
  } else {
    textYourWish.innerHTML = "";
    return true;
  }
};

// button
const resetBtn = () => {
  $("validation").reset();
  $("textName").innerHTML = "";
  $("textEmail").innerHTML = "";
  $("textSchool").innerHTML = "";
  $("textFavorite").innerHTML = "";
  $("textYourWish").innerHTML = "";
};

const validateForm = () => {
  let flag1 = validateFullName();
  let flag2 = validateEmail();
  let flag3 = selectSchool();
  let flag4 = sportCheckbox();
  let flag5 = validateYourWish();
  if (flag1 && flag2 && flag3 && flag4 && flag5) {
    alert("Sent data! We will contact you as soon as possible.");
  }
};