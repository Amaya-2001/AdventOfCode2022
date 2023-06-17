import * as fs from "fs";

function totalOfCalories() {
  //day01.txt file value inseretd an array called valuesOfCaloriesArray
  var valuesOfCalories = fs.readFileSync("day01.txt", "utf-8");
  const valuesOfCaloriesArray = valuesOfCalories.split(/\r?\n/);

  //console.log(valuesOfCaloriesArray);

  const newArray = valuesOfCaloriesArray
    .join("#")
    .split(/(?:^|#)()(?:#|$)/)
    .filter(Boolean)
    .map((v) => v.split("#"));
  //console.log(newArray);

  const sum = (a, b) => Number(a) + Number(b);
  const sumOfOneElveCalories = newArray.map((element) => element.reduce(sum));
  //console.log(sumOfOneElveCalories);

  // const maxCalories = Math.max(...sumOfOneElveCalories);
  // console.log(maxCalories);

  var arrOfNumber = sumOfOneElveCalories.map(function (str) {
    return parseInt(str, 10);
  });
  const maxCalories = Math.max(...arrOfNumber);
  console.log("maxCalories:", maxCalories);
  //console.log(arrOfNumber);
}

export default totalOfCalories;
