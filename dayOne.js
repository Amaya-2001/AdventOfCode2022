import * as fs from "fs";

function totalOfCalories() {
  //day01.txt file value inseretd an array called valuesOfCaloriesArray
  var valuesOfCalories = fs.readFileSync("day01.txt", "utf-8");
  const valuesOfCaloriesArray = valuesOfCalories.split(/\r?\n/);

  //console.log(valuesOfCaloriesArray);

  const newArray = valuesOfCaloriesArray
    .join("#") // '#' merge in to a string
    .split(/(?:^|#)()(?:#|$)/) //split on empty string
    .filter(Boolean) //remove empty values
    .map((v) => v.split("#")); //split on '#'

  const sum = (a, b) => Number(a) + Number(b); //sum take as an integer value
  const sumOfOneElveCalories = newArray.map((element) => element.reduce(sum));
  //console.log(sumOfOneElveCalories);

  // const maxCalories = Math.max(...sumOfOneElveCalories);
  // console.log(maxCalories);

  var arrOfNumber = sumOfOneElveCalories.map(function (str) {
    //all elements converted into number
    return parseInt(str, 10);
  });
  const maxCalories = Math.max(...arrOfNumber); //get maiximum value using 'Math' method
  console.log("maxCalories:", maxCalories);
  //console.log(arrOfNumber);
}

export default totalOfCalories;
