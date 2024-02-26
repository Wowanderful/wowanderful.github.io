

//Проверка на палиндром
const isPalindrom = (string) => {
  const tempString = string.toLowerCase();
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString
}
//Извлечение числа из строки
const isNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(!Number.isNaN(string.at(i), 10))) {
    result+= string.at(i);
    }
  }
  return parseInt(result, 10)
}

//Фугкция хз чего
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}


// Проверка длины строки
const checkString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true
  }

  return false
}
