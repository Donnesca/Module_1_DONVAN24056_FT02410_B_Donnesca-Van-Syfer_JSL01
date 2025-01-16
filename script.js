function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starfunctionts with 'pet_' and followed by alphanumeric characters
  const information = /^pet_[2015Forrest]/;

  if (information.test(input)) {
    result = "Valid Syntax";
  } else {
    result = "invalid Syntax";
  }

  document.getElementById("result").innerText = result;
}
/*function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = "";

  // Regular expression to check if input starts with 'pet_'
  // and is followed by alphanumeric characters
  const regex = /^pet_[a-zA-Z0-9]+$/;

  if (regex.test(input)) {
    result = "Valid syntax";
  } else {
    result =
      "Invalid syntax. Please enter a valid pet name starting with 'pet_' followed by alphanumeric characters.";
  }

  document.getElementById("result").innerText = result;
}
*/
