'use strict';
/*
Это задание выполняется отдельно от нашего проекта с бюджетом!
Для этого задания создайте отдельный репозиторий.
Используйте функции alert, confirm, prompt для общения с пользователем.
Написать игровой бот.
"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается.
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»
*/

function bot() {
  // Загадываем рандомное число
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newGame() {
    let number = getRandomInt(1, 100);
    console.log("number: " + number);

    // счётчик попыток
    let attemptСounter = 9;

    // попытка
    gameTry();

    function gameTry() {

      // получаем чиcло от пользователя
      let userNumber = prompt('Угадай число от 1 до 100');
      console.log("userNumber: " + userNumber);

      let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      };

      // логика игры
      function result() {
        if (number == userNumber) {
          if (gameOver('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
            newGame();
          } else {
            exitGame('Выход из игры...');
          }
        }
        if (attemptСounter === 0) {
          if (gameOver('Попытки закончились, хотите сыграть еще?')) {
            newGame();
          } else {
            exitGame('Выход из игры...');
          }
        } else if (userNumber == null) {
          exitGame('Выход из игры...');
        } else if (!isNumber(userNumber)) {
          notNumber('Введите число!')
        } else if (number < userNumber) {
          wrongNumber('Загаданное число меньше, осталось попыток: ' + attemptСounter);
        } else if (number > userNumber) {
          wrongNumber('Загаданное число больше, осталось попыток: ' + attemptСounter);
        }
      }
      return result();
    }

    // не правильный ответ
    function wrongNumber(x) {
      alert(x);
      attemptСounter--;
      gameTry();
    }

    // пользователь ввёл не число
    function notNumber(x) {
      alert(x);
      gameTry();
    }

    // выход из игры (пользователь нажал отмена)
    function exitGame(x) {
      alert(x)
    }

    // конец игры
    function gameOver(x) {
      return confirm(x);
    }

  }
  newGame();
}

bot();