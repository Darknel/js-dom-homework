(function () {

  // Находим и присваиваем переменные для кнопок и display(input)
  const display = document.querySelector(".calc-input");
  const numberButtons = document.querySelectorAll(".calc-number-buttons button");
  const operatorButtons = document.querySelectorAll(".calc-operators button");
  const specialButtons = document.querySelectorAll(".calc-special button");
  const eq = document.querySelector(".btn-eq");
  const clear = document.querySelector(".btn-clear");
  const backSpace = document.querySelector(".btn-backspace");

  // Создание функций
  // Создание функции "buttonPushed" которая будет брать нажатую кнопку с числом и выводить её в display
  const buttonPushed = event => display.value += event.target.innerText;
  // Создание функции "operatorPushed" которая будет брать нажатую кнопку с оператором и если последний знак в display будет оператором, то он заменяется на новый и выводит его в display
  const operatorPushed = event => {
    if (display.value[display.value.length - 1] == null) {
      return display.value;
    }
    if (display.value[display.value.length - 1] == "+" || display.value[display.value.length - 1] == "-" || display.value[display.value.length - 1] == "*" || display.value[display.value.length - 1] == "/" || display.value[display.value.length - 1] == "%" || display.value[display.value.length - 1] == ".") {
      display.value = display.value.slice(0, -1);
      return display.value += event.target.innerText;
    }
    return display.value += event.target.innerText;

  };
  // Создание функции "calculate" которая будет брать значение "display" и подсчитывать его. 
  const calculate = () => {
    // Если display будет пустой, то при нажатии на кнопку (=), display будет обнуляться.
    if (display.value === "") {
      display.value === null;
      // Если при наатии кнопки (=) последний элемент display будет математическим оператором, то этот оператор вырезается и проводится подсчет.
    } else if (display.value[display.value.length - 1] == "+" || display.value[display.value.length - 1] == "-" || display.value[display.value.length - 1] == "*" || display.value[display.value.length - 1] == "/" || display.value[display.value.length - 1] == "%" || display.value[display.value.length - 1] == ".") {
      display.value = display.value.slice(0, -1);
      return display.value = Math.round(eval(display.value) * 10) / 10;
      // Если результатом будет бесконечность(Infinity), то значение калькулятора обнулится.
    } else if (Math.round(eval(display.value) * 10) / 10 == Infinity) {
      display.value = null;
    } else if (display.value == "0/0") {
      display.value = null;
    } else {
      return display.value = Math.round(eval(display.value) * 10) / 10;
    }
    return display.value;
  };
  // Создание функции "clearDisplay" которая будет обнулять значение в "display"
  const clearDisplay = () => display.value = null;
  // Создание функции "onkeydown" которая работает с кнопкой backspace и кнопкой удалит последний символ. 
  const onkeydownBackspace = (e) => {
    if (e.keyCode === 8) {
      let length = display.value.length;
      display.value = display.value.substring(0, length - 1);
    } else display.value = display.value.substring(0, display.value.length - 1);
  }

  // Добавление обработчиков addEventListeners
  // Мы берем все кнопки с цифрами и добавляем им click обработчик событий и функцию под названием "buttonPushed()"
  numberButtons.forEach(button => button.addEventListener("click", buttonPushed));
  // Мы берем все кнопки с операторами и добавляем им click обработчик событий и функцию под названием "buttonPushed()"
  operatorButtons.forEach(button => button.addEventListener('click', operatorPushed));
  // Мы берем все кнопки с специальными операторами и добавляем им click обработчик событий и функцию под названием "buttonPushed()"
  specialButtons.forEach(button => button.addEventListener('click', operatorPushed));
  // Мы берем кнопку подсчитать(=) и добавляем ей обработчик событий, который будет вызывать функцию "calculate"
  eq.addEventListener('click', calculate);
  // Мы берем кнопку очистить(С) и добавляем ей обработчик событий, который будет вызывать функцию "clearDisplay"
  clear.addEventListener('click', clearDisplay);
  // Мы берем кнопку очистить последний символ(<-) и добавляем ей обработчик событий, который будет вызывать функцию "backspace"
  backSpace.addEventListener('click', onkeydownBackspace);
  // Мы берем display и добавляем ему обработчик событий, который будет вызывать функцию "onkeydownBackspace" (удаление последнего символа по нажатию кнопки backspace на клавиатуре)
  display.addEventListener("keydown", onkeydownBackspace);
})();
















/* const checkPhoneKey = (key) => {
  if ((key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace') return key.addEventListener('click', buttonPushed);

} */

/* display.addEventListener('keydown', checkPhoneKey); */