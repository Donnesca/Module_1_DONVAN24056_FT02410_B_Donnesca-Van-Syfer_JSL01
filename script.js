function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starfunctionts with 'pet_' and followed by alphanumeric characters
  //let resultText = { pet_2015Forrest };
  const regex = /pet_[A-za-z\d]/;
  if (regex.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "Invalid Syntax";
  }
  /*const regex = /^pet_[2015Forrest]/;

  if (regex.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "invalid Syntax";
  }
*/
  document.getElementById("result").innerText = result;
}
