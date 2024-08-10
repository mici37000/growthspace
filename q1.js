document.addEventListener('DOMContentLoaded', () => {
  iterateNumbers(100);
});

function iterateNumbers(numOfIterations = 100) {
  Array.from(Array(numOfIterations).keys()).forEach((item) => {
    const num = item + 1;
    let res = "";

    if (num % 3 == 0) {
      res = "Fiz";
    }

    if (num % 5 === 0) {
      res += "Buzz";
    }

    if (res === "") {
      res = num;
    }

    console.debug(`Number: ${res}`);
  });
}
