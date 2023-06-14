import * as fs from "fs";

function totalOfCalories() {
  var sum = 0;
  //day01.txt file value inseretd an array called valuesOfCaloriesArray
  var valuesOfCalories = fs.readFileSync("day01.txt", "utf-8");
  const valuesOfCaloriesArray = valuesOfCalories.split(/\r?\n/);

  //console.log(valuesOfCaloriesArray);

  const newArray = valuesOfCaloriesArray
    .join("#")
    .split(/(?:^|#)()(?:#|$)/)
    .filter(Boolean)
    .map((v) => v.split("#"));

  console.log(newArray);
  //[[4,5],[6,2,3]]
}

export default totalOfCalories;
