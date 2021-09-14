  $(document).ready(function () {
    $("#dd1").click(function () {
      $("#dd1").hide();
      $("#dd2").show();
      $("#dd2").click(function () {
        $("#dd2").hide();
        $("#dd1").show();
      });
    });
    $("#dev1").click(function () {
      $("#dev1").hide();
      $("#dev2").show();
      $("#dev2").click(function () {
        $("#dev2").hide();
        $("#dev1").show();
      });
    });
  
    $("#pm1").click(function () {
      $("#pm1").hide();
      $("#pm2").show();
      $("#pm2").click(function () {
        $("#pm2").hide();
        $("#pm1").show();
      });
    });
    $("#black").hover(function () {
      $("#BS").show();
    },
    function(){
      $("#BS").hide();
    });
  
    $("#ontariosecurity").hover(function () {
      $("#sec").show();
    },
    function(){
        $("#sec").hide();
    })
  
    $("#Pyramids").hover(function () {
      $("#pyr").show();
    },
    function(){
        $("#pyr").hide();
    })
  
  
    $("#JimCarry").hover(function () {
      $("#jim").show();
    },
    function(){
        $("#jim").hide();
    })
  
    $("#NiceDay").hover(function () {
      $("#Nice").show();
    },
    function(){
        $("#Nice").hide();
    })
  
    $("#Calculator").hover(function () {
      $("#calc").show();
    },
    function(){
        $("#calc").hide();
    })
  
    $("#burned").hover(function () {
      $("#Burn").show();
    },
    function(){
        $("#Burn").hide();
    })
  
    $("#Giraffe").hover(function () {
      $("#Giraffe").show();
    },
    function(){
        $("#GR").hide();
    })
  
  $("#submit").click(function (e) {
      e.preventDefault();
      
      alert("message recived.thanks")
  })
  
  });





