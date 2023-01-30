let str = "00055544299992338";
let output = "0542938";
function removeDuplicate(str) {
  let convertArr = str.split("");

  let result = convertArr.filter((val, index) => {
    return convertArr.indexOf(val) === index;
  });
  return result.join("");
}
console.log(removeDuplicate(str));
