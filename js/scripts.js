// Business Logic
let newArray = [];
  
function beepBoop(array) {
  for(let i=0; i <= array.length; i++) {
    // let arrayFilter = newArray.filter((number) => {
    //   return newArray.index[i] >= 10
    // }) 
    // console.log(arrayFilter);
    if (array[i] >= 10) {
      array.split(", ");
      newArray.push(array);
    };
    if (array[i].contains("3")) {
      newArray.text("Won't you be my neighbor?")
      newArray.push(array[i]);
      console.log(newArray);
    } else if (array[i].contains("2")) {
      newArray.text("Boop!")
      newArray.push(array[i]);
      console.log(newArray);
    } else if (array[i].contains("1")) {
      newArray.text("Beep!")
      newArray.push(array[i]);
      console.log(newArray);
    };
  } return newArray;
};


  // for (let i = 0; index <= array; i++)
  // split outputs >10 and search for 1/2/3, or maybe use contains(), or includes()?
  

  // User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#numInput").val());
    let newArray = beepBoop(numberInput);
    let returnArray = [];
    for (let index = 0; index <= numberInput; index += 1) {
      returnArray.push(index);
    };
    console.log(newArray);
    console.log(returnArray);
    $("#output").text(returnArray);
  });
})