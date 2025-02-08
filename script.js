let display = document.getElementById('result');

// Загрузка данных из localStorage
window.onload = function () {
  let savedValue = localStorage.getItem('calculatorDisplay');
  if (savedValue) {
    display.value = savedValue;
  }
};

// Добавление числа или оператора
function appendNumber(number) {
  display.value += number;
  saveToLocalStorage();
}

function appendOperator(operator) {
  display.value += operator;
  saveToLocalStorage();
}

// Вычисление результата
function calculateResult() {
  try {
    let expression = display.value.replace('^', '**'); // Замена степени на **
    let result = eval(expression);
    display.value = result;
    saveToLocalStorage();
  } catch (error) {
    display.value = 'Ошибка';
  }
}

// Очистка дисплея
function clearDisplay() {
  display.value = '';
  saveToLocalStorage();
}

// Удаление последнего символа
function deleteLast() {
  display.value = display.value.slice(0, -1);
  saveToLocalStorage();
}

// Сохранение в localStorage
function saveToLocalStorage() {
  localStorage.setItem('calculatorDisplay', display.value);
}