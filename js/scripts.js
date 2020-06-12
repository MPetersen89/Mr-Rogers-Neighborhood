// Business Logic
const numConverter = function(num) {
  let array = [];
  let numInput = "";
  while (num > 0) {
    if (num > 0)
    num -= 1;
    array.push(num);
  }
}

// User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault(event);
    const numberInput = parseInt($("input[name=number]").val());

    if (!numInput || numInput < 0)
      alert("Please enter a valid positive integer for Mr. Rogers to translate.");
      return;

    const output = numConverter(numInput)

    $(".results").show();
    $("#numInput").text(numberInput);
    $("#output").text(output)
  })
})