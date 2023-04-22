function add_commas_and_underscore(num) {
  let result = num.toLocaleString(); //("ar-EG");
  result = result.split("");
  result[result.length - 4] = "_";
  result = result.join("");
  return result;
}

console.log(add_commas_and_underscore(120)); //# 120
console.log(add_commas_and_underscore(1530)); // # 1_530
console.log(add_commas_and_underscore(120510650)); //  # 120,510_650
console.log(add_commas_and_underscore(510650480910)); //  # 510,650,780_910
console.log(add_commas_and_underscore(12069057014032)); //  # 12,069,057,014_032
