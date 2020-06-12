// Business Logic
const numConverter = function(num) {
  let array = [];
  // let numberInput = "";
  while (num > 0) {
    if (num > 0)
    num -= 1;
    array.push(num);
    console.log(num)
  }
}

// User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault(event);
    const numberInput = parseInt($(numInput).val());
    console.log("You typed " + numberInput);
    numberInput.forEach(function(number) {

    })
    // if (!numInput || numInput < 0)
    //   alert("Please enter a valid positive integer for Mr. Rogers to translate.");
    //   return;
    console.log("alert works");
    const output = numConverter(numInput)

    $(".results").show();
    console.log("results are showing");
    $("#numInput").text(numberInput);
    console.log("results taken from numInput");
    $("#output").text(output);
    console.log("results are being sent to output");
  })
})