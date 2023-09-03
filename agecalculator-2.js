var birthday = document.getElementById("birthday");
var result = document.getElementById("result");
var submitButton = document.getElementById("submit");

const today = new Date();

var calculator = function () {
  let brithDate = new Date(birthday.value);
  let age;

  if (
    today.getMonth() > brithDate.getMonth() ||
    (today.getMonth() == brithDate.getMonth() &&
      today.getDate() >= brithDate.getDate())
  ) {
    age = today.getFullYear() - brithDate.getFullYear();
  } else {
    age = today.getFullYear() - brithDate.getFullYear() - 1;
  }

  result.innerText = `귀하의 만 나이는 ${age} 입니다.`;
};

submitButton.addEventListener("click", calculator);
