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

    // $(".error").hide(); 

    $('#LeaderboardForm').on('submit',function(evt){ //when form is submited function begins
        evt.preventDefault(); //prevents default event from being called
        error=false; //when error is false
        $(".error").hide();

        var votes = $("#votes").val();  //defining a variable of votes with the votes id
        var name = $("#lb_name").val(); //defining variable name with name id
        // 
        if(name.length < 6) //validating name 
        {
            error=true;     //if the name is shorter than 4 characters, error is true
        }
        if  (votes < 0 || votes > 68) //if the score is less than 0 or more than 
                                      // 68, error will be true
        {
            error=true;
        }
        if (error) //if error is true, display an error message to instruct the user
        alert("There is a problem with your inputs - Ensure that you have entered the full name and a votes smaller than the bottom votes");
        else{   
             //logging changes
            item = $('div.gen_record').length+1;          //logging changes
            $(".container").append('<div class="gen_record" id="place_'+item+'"><ul> <li>'+item+'th Place</li> <li class="name">' + name + '</li><li class="votes">'+ votes +'</li></div>');
        };
        

       
    });
});
