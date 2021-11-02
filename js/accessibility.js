$(function(){
    $('input').click(function(){
        var changeFont = $('li');
        var ActiveFontSize = changeFont.css('fontSize');
        var changeBy = parseFloat(ActiveFontSize);
        console.log(changeBy)
        var stringEnding = ActiveFontSize.slice(-2);
        if(this.id == 'larger'){
            changeBy *= 1.2;
        }
        else if(this.id == 'smaller'){
            changeBy /= 1.2;
        }
        else if(this.id == 'undo'){
            changeBy = 16;
        }
        changeFont.css('fontSize', changeBy + stringEnding)
    });
});