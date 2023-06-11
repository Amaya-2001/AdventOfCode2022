import * as fs from "fs";

function totalOfCalories() {
  const newTotalCaloriesArray = [];
  const oneElveCalories = [];

  var valuesOfCalories = fs.readFileSync("day01.txt", "utf-8");
  const valuesOfCaloriesArray = valuesOfCalories.split(/\r?\n/);
  //console.log(valuesOfCaloriesArray);

  for (let i = 0; i < valuesOfCaloriesArray.length; i++) {
    //console.log(valuesOfCaloriesArray[i]);

    if (valuesOfCaloriesArray[i] != "") {
      oneElveCalories.push(valuesOfCaloriesArray[i]);

      //   var totalNumberOfCalories =
      //     totalNumberOfCalories + valuesOfCaloriesArray[i];
      //console.log(sumOfElement);

      //break;
    } else {
      //   var removeSpaceElement = newTotalCaloriesArray.splice(
      //     valuesOfCaloriesArray[i]
      //   );
      let sumOfElement;
      for (let i = 0; i < oneElveCalories.length; i++) {
        sumOfElement = sumOfElement + oneElveCalories[i];
      }
      newTotalCaloriesArray.push(sumOfElement);
      //console.log(sumOfElement);
    }
  }
  const filterdArray = [];
  for (let i = 0; i < newTotalCaloriesArray.length; i++) {
    if (newTotalCaloriesArray[i]) {
      filterdArray.push(newTotalCaloriesArray[i]);
    }
  }
  const maxCalorieTotal = Math.max(filterdArray);
  console.log(filterdArray);
  console.log("maxCalorieTotal:", maxCalorieTotal);
}

export default totalOfCalories;
