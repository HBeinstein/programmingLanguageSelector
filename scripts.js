function adder (value) {
  if (value === "1") {
    counter += 1;
  } else if (value === "2") {
    counter += 2;
  } else if (value === "3") {
    counter += 3;
  } else {
    console.log("error");
  }
}

let counter = 0;

$(document).ready(function() {
  $("#submitButton").click(function() {
    $("#resultsContainer p").hide();

    const questionOneVal = $("input[name='Q1']:checked").val();
    const questionTwoVal = $("input[name='Q2']:checked").val();
    const questionThreeVal = $("input[name='Q3']:checked").val();
    const questionFourVal = $("input[name='Q4']:checked").val();
    const questionFiveVal = $("input[name='Q5']:checked").val();

    adder(questionOneVal);
    adder(questionTwoVal);
    adder(questionThreeVal);
    adder(questionFourVal);
    adder(questionFiveVal);

    if(counter >=5 && counter <10) {
      $("#python").show();
      $("#refreshButton").show();
      counter = 0;
    } else if(counter >=10 && counter <15) {
      $("#ruby").show();
      $("#refreshButton").show();
      counter = 0;
    } else if(counter >=15 && counter <20) {
      $("#php").show();
      $("#refreshButton").show();
      counter = 0;
    } else {
      console.log(error);
    }
  });
});