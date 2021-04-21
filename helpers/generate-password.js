module.exports.generatePassword = () => {
  var set1 = "ABCDEFGHIJKLMNIPQRSTUVWXYZ",
    set2 = "abcdefghijklmnopqrstuvwxyz",
    set3 = "@#$_",
    result = "";
  for (let i = 1; i <= 12; i++) {
    if (i % 2 && i < 4) {
      let no = Math.ceil(Math.random() * set1.length);
      result += set1.charAt(no);
      console.log(`Result: ${result}`)
    } else if (i >= 4 && i < 6) {
      let no = Math.ceil(Math.random() * set3.length);
      result += set3.charAt(no);
      console.log(`Result: ${result}`)
    } else {
      let no = Math.ceil(Math.random() * set2.length);
      result += set2.charAt(no);
      console.log(`Result: ${result}`)
    }
  }
  console.log(`Result: ${result}`)
  return result;
};
