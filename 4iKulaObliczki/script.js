num1 = document.querySelector("#num1");
num2 = document.querySelector("#num2");
btn1 = document.querySelector("#btn1");
operation = document.querySelector("#operation");
display = document.querySelector(".display");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (operation.value == "dodawanie") {
    display.innerHTML = `Suma liczb ${num1.value} i ${num2.value} to: ${
      Number(num1.value) + Number(num2.value)
    }`;
  } else if (operation.value == "odejmowanie") {
    display.innerHTML = `Różnica liczb ${num1.value} i ${num2.value} to: ${
      Number(num1.value) - Number(num2.value)
    }`;
  } else if (operation.value == "mnozenie") {
    display.innerHTML = `Iloczyn liczb ${num1.value} i ${num2.value} to: ${
      Number(num1.value) * Number(num2.value)
    }`;
  } else if (operation.value == "dzielenie") {
    if (Number(num2.value == 0)) {
      display.innerHTML = "Nie dziel przez 0!!!";
    } else {
      display.innerHTML = `Iloraz liczb ${num1.value} i ${num2.value} to: ${
        Number(num1.value) / Number(num2.value)
      }`;
    }
  }
});
