$(document).ready(function(){
    // $(".gen_record").toggle();
    // alert("Please click on the background to display items from the leaderboard.");
    
    $("body").click(function(){
         $("#first_place").animate({opacity: "100%" } ,500,  function() {
            $("body").click(function(){
                $("#second_place").animate({opacity: "80%"}, 500 , function() {
                    $("body").click(function(){
                        $("#third_place").animate({opacity: "80%"} ,500 , function() {
                            $("body").click(function(){
                                    $("#fourth_place").animate({opacity: "80%"}, 500, function() {
                                        $("body").click(function() {
                                                $("#fifth_place").animate({opacity: "80%"} ,500, function(){
                                                    $("body").click(function(){
                                                        $("#sixth_place").animate({opacity: "80%"} ,500)
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

    $('#myForm').on('submit',function(evt){
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
            $(".container").append('<div class="gen_record" id="sixth_place"' /* +item */ + name + " " + score +'</div>');
        };
        

        $("#addInfo").click(function(event){
            event.stopImmediatePropagation();
            $("#newInfo").toggle(1000);
            $("#lb_name").focus();
        });
    });
});
