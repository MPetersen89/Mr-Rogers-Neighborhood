// Business Logic
function beepBoop(numberInput) {
  let newArray = [];
  for(let i=0; i <= numberInput; i++) {
    let number = i.toString();
    if (number.includes(3)) {
      newArray.push("Won't you be my neighbor?");
    } else if (number.includes(2)) {
      newArray.push("Boop!");
    } else if (number.includes(1)) {
      newArray.push("Beep!");
    } else {
      newArray.push(number);
    }
  } return newArray;
};

  // User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#numInput").val());
    let newArray = beepBoop(numberInput);
    console.log(newArray);
    $("#output").text(newArray);
  });
})