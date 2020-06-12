// Business Logic
let inputArray = [];
  if (numInput > 0) {
    numInput -= 1;
    inputArray.push(numInput);
  }
// return inputArray;
console.log(inputArray);

const numberInput = "";
numberInput.forEach(function(number) {
  number 
})

const numConverter = function(num) {
  // let numberInput = "";
  if (num > 0) {
    num -= 1;
    array.push(num);
    console.log(num)
  } else if (num.contains(1)) {
    num.replaceValue("Beep!");
  } else if (num.contains(2)) {
    num.replaceValue("Boop!");
  } else if (num.contains(3)) {
    num.replaceValue("Won't you be my neighbor?");
  }



// User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault(event);
    const numberInput = parseInt($(numInput).val());
    console.log("You typed " + numberInput);
    
    
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
