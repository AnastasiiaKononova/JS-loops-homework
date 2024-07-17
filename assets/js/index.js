for (let i = 1; i <= 10; i++){
    console.log(i*i)
}

const originPassword = "qwerty";
  let userPassword = "";

  while (userPassword !== originPassword) {
    userPassword = prompt("Введите пароль:");
    if (userPassword === originPassword) {
      console.log("Ви успeшно вошли  в систему");
    } else {
      console.log("Неверный пароль, попробуйте еще  раз.");
    }
  }

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

const size = Number(prompt("Введіть розмір трикутника:"));
for (let i = 1; i <= size; i++) {
  console.log("*".repeat(i));
}

const size1 = 10;
for (let rowIterator = 1; rowIterator <= size1; rowIterator++) {
  let rowString = "";

  for (let colIterator = 1; colIterator <= size1; colIterator++) {
    if (rowIterator === 1 || rowIterator === size1) {
      rowString += " * ";
    } else if (
      colIterator === 1 ||
      colIterator === rowIterator ||
      colIterator === size1
    ) {
      rowString += " * ";
    } else {
      rowString += "   ";
    }
  }
  console.log(rowString);
}


for (let rowIterator = 0; rowIterator < size1; rowIterator++) {
  let rowString = "";

  for (let colIterator = 1; colIterator <= size1; colIterator++) {
    if (rowIterator === 0 || rowIterator === size1-1) {
      rowString += " * ";
    } else if (
      colIterator === 1 ||
      colIterator === size1 - rowIterator ||
      colIterator === size1
    ) {
      rowString += " * ";
    } else {
      rowString += "   ";
    }
  }
  console.log(rowString);
}
