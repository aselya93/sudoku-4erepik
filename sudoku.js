const fs = require('fs');
const chalk = require('chalk');

try {
  function read() {
    if (process.argv[2] == 0 || !process.argv[2]) {
      console.log('Мы это предусмотрели 🧠🧠🧠');
    } else {
      const proc = process.argv[2] - 1;

      const asd = fs
        .readFileSync('./puzzles.txt', 'utf-8')
        .trim()
        .split('\n')
        .map((el) => el.split(''))[proc];
      let res = [];
      let res1 = [];
      let res2 = [];
      let res3 = [];
      let res4 = [];
      let res5 = [];
      let res6 = [];
      let res7 = [];
      let res8 = [];
      let res9 = [];

      for (let i = 0; i < asd.length; i++) {
        if (i <= 8) {
          res1.push(asd[i]);
          if (res1.length == 9) {
            res.push(res1);
          }
        }
        if (i > 8 && i <= 17) {
          res2.push(asd[i]);
          if (res2.length == 9) {
            res.push(res2);
          }
        }
        if (i > 17 && i <= 26) {
          res3.push(asd[i]);
          if (res3.length == 9) {
            res.push(res3);
          }
        }
        if (i > 26 && i <= 35) {
          res4.push(asd[i]);
          if (res4.length == 9) {
            res.push(res4);
          }
        }
        if (i > 35 && i <= 44) {
          res5.push(asd[i]);
          if (res5.length == 9) {
            res.push(res5);
          }
        }
        if (i > 44 && i <= 53) {
          res6.push(asd[i]);
          if (res6.length == 9) {
            res.push(res6);
          }
        }
        if (i > 53 && i <= 62) {
          res7.push(asd[i]);
          if (res7.length == 9) {
            res.push(res7);
          }
        }
        if (i > 62 && i <= 71) {
          res8.push(asd[i]);
          if (res8.length == 9) {
            res.push(res8);
          }
        }
        if (i > 71 && i <= 80) {
          res9.push(asd[i]);
          if (res9.length == 9) {
            res.push(res9);
          }
        }
      }
      // const asd2 = asd

      return res;
    }
  }
  // console.log(read());

  // .map((el)=>[el]).map((el)=>el.map((el)=>el.split('')))
  function solve() {
    /**
     * Принимает игровое поле в том формате, в котором его вернули из функции read.
     * Возвращает игровое поле после попытки его решить.
     */
  }

  function isSolved() {
    /**
     * Принимает игровое поле в том формате, в котором его вернули из функции solve.
     * Возвращает булевое значение — решено это игровое поле или нет.
     */
  }

  function prettyBoard(input) {
    console.log(chalk.bgWhiteBright('\n--------------------------------------'));
const prettyTable = input.forEach((el) => {console.log(chalk.bgWhiteBright.black(' |' + el.join(' | ') + ' | ' + '\n------------------------------------- ',
        ),
      );
    });
  }
  prettyBoard(read());
} catch (error) { console.error();
}
