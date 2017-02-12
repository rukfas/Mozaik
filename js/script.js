$(document).ready(function () {
    
    $("#text-slider div:gt(0)").hide();
    
    
    setInterval(function(){
        
        $("#text-slider div:first").fadeOut(500).next().fadeIn(2000).end().appendTo("#text-slider");
        
    }, 6000);
    
    
    
});