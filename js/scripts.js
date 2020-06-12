// Business Logic


//   if (numInput > 0) {
//     numInput -= 1;
//     inputArray.push(numInput);
//   }
// return inputArray;
// console.log(inputArray);

// inputArray.forEach(function(number) {
//   alert(number); 
// })





// User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault(event);
    const numberInput = parseInt($(numInput).val());
    console.log("You typed " + numberInput);
    let inputArray = [0];
    let returnArray = [];
    for (let index = 0; index === numberInput; index += 1) {
      returnArray.push(inputArray[index] + 1);
    };
    returnArray;
    console.log(returnArray);
    })
    
    // if (!numInput || numInput < 0)
    //   alert("Please enter a valid positive integer for Mr. Rogers to translate.");
    //   return;
    // console.log("alert works");
    // const output = numConverter(numInput)

    // $(".results").show();
    // console.log("results are showing");
    // $("#numInput").text(numberInput);
    // console.log("results taken from numInput");
    // $("#output").text(output);
    // console.log("results are being sent to output");
  });
