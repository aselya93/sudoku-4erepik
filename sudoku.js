


function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}



  /**
     * Принимает игровое поле в том формате, в котором его вернули из функции read.
     * Возвращает игровое поле после попытки его решить.
     */
function solve(arr) {

  // переделка массива
  for (let i = 0; i < arr.length; i++) {
    const arri = arr[i]
    for (let j = 0; j < arr.length; j++) {
  
      if (arri[j]==='-')
      {
        arri[j]=0
      }
      else if(typeof(arri[j]==='string'))
      {
        arri[j]=Number(arri[j])
      
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const arri = arr[i]
    for (let j = 0; j < arr.length; j++) {
        if(arri[j]===0 && arri.includes(i)){
          console.log(111111)
          arri[j]=i+1
        }
    }
  }
  
  
  return arr
}
console.log(solve(arr))

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


