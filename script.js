const FemaleNames = {
  Monday: "Akosua",
  Tuesday: "Adwoa",
  Wednesday: "Abenaa",
  Thursday: "Akua",
  Friday: "Yaa",
  Saturday: "Afua",
  Sunday: "Ama",
};
const MaleNames = {
  Monday: "Kwasi",
  Tuesday: "Kwadwo",
  Wednesday: "Kwabena",
  Thursday: "Kwaku",
  Friday: "Yaw",
  Saturday: "Kofi",
  Sunday: "Kwame",
};

const dayMapping = [
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
];

const form = document.forms["form"];
const result = document.getElementById("aka");

function validateGender(gender) {
  if (gender === "male" || gender == "female") {
    return true;
  }
  return false;
}

function validateDate(month, date) {
  if (date >= 1 && date <= 31 && month >= 1 && month <= 12) {
    return true;
  }
  return false;
}

function getName(gender, dayOfWeek) {
  if (gender === "male") {
    return MaleNames[dayOfWeek];
  } else {
    return FemaleNames[dayOfWeek];
  }
}

function calculateDayOfWeek(date, month, year) {
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = date;
  const d = (4 * CC - 2 * CC - 1 + 45 * YY + 1026 * (MM + 1) + DD) % 7;
  return dayMapping[d];
}

function generator(event) {
  event.preventDefault();

  const birthdate = form["birthdate"].value;
  const gender = form["gender"].value;

  const isGenderValid = validateGender(gender);

  if (!isGenderValid) {
    alert("Invalid gender, please select male or female");
  }

  const parsedDate = new Date(birthdate);
  const month = parsedDate.getMonth() + 1;
  const date = parsedDate.getDate();
  const year = parsedDate.getFullYear();
  const isDateValid = validateDate(month, date);

  if (!isDateValid) {
    alert(
      "Invalid date, date should be between 1 and 31 and month between 1 and 12",
    );
  }

  const dayOfWeek = calculateDayOfWeek(date, month, year);
  const name = getName(gender, dayOfWeek);
  result.textContent = name;
}

form.addEventListener("submit", generator);

const getresults = document.querySelector(".results");
