$(document).ready(function(){
    // $(".gen_record").toggle();
    alert("Please click on the background to display records from the leaderboard.");
    
    // beginning of function to animate each list record_no
    // each animation is nested into the previous so as to wait for the next click
    $("body").click(function()
    {     //first animation goes to 100% opacity to highlight first place
        $("#place_1").animate({opacity: "100%" } ,500,  function()
        {
            $("body").click(function()
            {     //second and third go to 90% so they remain more highlighted than next results
                $("#place_2").animate({opacity: "90%"}, 500 , function()
                {
                    $("body").click(function()
                    {
                        $("#place_3").animate({opacity: "90%"} ,500 , function() 
                        {
                            $("body").click(function()
                            {     // anything lower than 80% becomes difficult to see with smaller fonts
                                    $("#place_4").animate({opacity: "80%"}, 500, function() 
                                    {
                                        $("body").click(function() 
                                        { 
                                                $("#place_5").animate({opacity: "80%"} ,500, function()
                                                {
                                                    $("body").click(function()
                                                    {
                                                        $("#place_"+record_no).animate({opacity: "80%"} ,500)
                                                    });         //by adding + record_no we can add multiple new records
                                                                //record_no gets defined later
                                                });
                                        });
                                    }); 
                            });
                        });
                    });
                });
            });
        });
    });
//end of animation function

// beginning of form submition script
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
                                      //this will ensure a result isnt allowed if it has
                                      // more votes than the current fewest votes
        {
            error=true;
        }
        if (error) //if error is true, display an error message to instruct the user
        alert("There is a problem with your inputs - Ensure that you have entered the full name and the votes are fewer than the lowest shown number of votes");
        else{   
            record_no = $('div.gen_record').length+1; // counts the number of records and adds one
            $(".container").append('<div class="gen_record" id="place_'+record_no+'"><ul> <li class="placing">'+record_no+'th Place</li> <li class="name">' + name + '</li><li class="votes">'+ votes +'</li></div>');
        };
        

       
    });
});
