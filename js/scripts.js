// Business Logic


// User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault(event);
    const numberInput = parseInt($(numInput).val());
    console.log("You typed " + numberInput);
    // let startingArray = [0, ""];
    // let returnArray = [];
    // for (let index = 0; index <= numberInput; index += 1) {
    //   returnArray.push(numInput[index] + 1);
    // };
    // console.log(returnArray);
    $("#output").text(numberInput);
  })
  
})