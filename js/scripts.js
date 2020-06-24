// Business Logic
function beepBoop(array) {
  let newArray = [];
  for(let i=0; i <= array.length; i++) {
    let arrayFilter = newArray.filter((array) => {
      return newArray.index[i] >= 10
    }) 
    console.log(arrayFilter);
    // if (array[i].contains(1)) {
    //   newArray.push(array[i]);
    //   console.log(newArray);
    // };
    // if (array[i] >= 10) {
    //   array.split[i];
    //   newArray.push(array);
    // } 
  }
}


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
    console.log(arrayFilter);
    console.log(returnArray);
    $("#output").text(returnArray);
  });
})