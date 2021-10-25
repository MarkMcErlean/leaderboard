(document).ready(function(){ 
    var currentMenu = 1;  
    var curMotion = 45; 

    //  Animate a row of the data and use the on so that it is dynamic for newly added row information from the 
FORM 
    $(".menuOuter").on("click",function(){ 
        $("#li"+currentMenu).animate({left:  curMotion + '%' }); 
        currentMenu += 1; 
        curMotion -= 3;  
    }); 
 
    $(".error").hide();     // make the error messages invisible on page load 
 
       
    $('#submit').click(function(evt) { 
        evt.stopImmediatePropagation();               // stop the natural HTML FORM submit 
        error = false;                                 // assume there are no errors and then prepare to check 
        $(".error").hide();