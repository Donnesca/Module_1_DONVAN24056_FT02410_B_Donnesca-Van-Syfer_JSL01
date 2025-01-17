function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starfunctionts with 'pet_' and followed by alphanumeric characters
  const regex = /pet_[A-za-z\d]/;
  if (regex.test(input)) {
    result = "Valid Syntax \uD83D\uDFE2"; //Green Circle Emoji
  } else {
    result = "Invalid Syntax \uD83D\uDD34"; //Red Circle Emoji
  }

  document.getElementById("result").innerText = result;
}
