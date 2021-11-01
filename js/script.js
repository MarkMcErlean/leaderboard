$(document).ready(function(){
    // $(".gen_record").toggle();
    // alert("Please click on the background to display items from the leaderboard.");
    
    $("body").click(function(){
         $("#place_1").animate({opacity: "100%" } ,500,  function() {
            $("body").click(function(){
                $("#place_2").animate({opacity: "80%"}, 500 , function() {
                    $("body").click(function(){
                        $("#place_3").animate({opacity: "80%"} ,500 , function() {
                            $("body").click(function(){
                                    $("#place_4").animate({opacity: "80%"}, 500, function() {
                                        $("body").click(function() {
                                                $("#place_5").animate({opacity: "80%"} ,500, function(){
                                                    $("body").click(function(){
                                                        $("#place_6").animate({opacity: "80%"} ,500)
                                                    });
                                                });
                                        });
                                    }); 
                                });
                            })
                        });
                });
        });
    });
});

    $(".error").hide();

    $('#myForm').on('submit',function(evt){ //when form is submited function begins
        evt.preventDefault();
        error=false;
        $(".error").hide();

        var score = $("#score").val();
        var name = $("#lb_name").val();
        // 
        if(name.length < 4)
        {
            $("#err_name").show();
            error=true;
        }
        if  (score < 0 || score > 99)
        {
            $("#err_score").show();
            error=true;
        }
        if (error)
        alert("There is a problem! sorry!");
        else{
            $("#newInfo").hide();
            console.log("Data is being added" + score);
            item = $('div.gen_record').length+1;
            console.log("DIV Length: " + item);
            $(".container").append('<div class="gen_record" id="place_'+item+'"><ul> <li class="name">' + name + '</li><li class="score">'+ score +'</li></div>');
        };
        

        $("#addInfo").click(function(event){
            event.stopImmediatePropagation();
            $("#newInfo").toggle(1000);
            $("#lb_name").focus();
        });
    });
});
