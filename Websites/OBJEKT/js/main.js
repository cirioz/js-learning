// const section = $('div.main-container_column2 ');
$(document).ready(function(){
  $("#graphite_button").click(function(){
    $("#copper").hide();
    $("#gunmetal").hide();
    $("#graphite").show();
  });
})
$(document).ready(function(){
  $("#copper_button").click(function(){
    $("#graphite").hide();
    $("#gunmetal").hide();
    $("#copper").show();
  });
})

$(document).ready(function(){
  $("#gunmetal_button").click(function(){
    $("#graphite").hide();
    $("#copper").hide();
    $("#gunmetal").show();
  });
})




const section2 = $('div.main-container_column3');
const section3 = $('div.main-container_column4');
const section4 = $('div.main-container_column5');



function toggleAccordion() {
  section2.removeClass('active');
  section3.removeClass('active');
  section4.removeClass('active');
  $(this).addClass('active');
}



section2.on('click', toggleAccordion);
section3.on('click', toggleAccordion);
section4.on('click', toggleAccordion);




