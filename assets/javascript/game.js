var buttons = ["button1" , "button2" , "button3" , "button4"];
 var score = 0 ;
 var wins = 0;
 var losses = 0;
var reset = function(){
    score = 0;
    $("#current").text(score);
     target = Math.floor((Math.random()*101)+19); // possible error here
    $("#target").text(target);
    $("#button1").val(Math.floor((Math.random()*12)+1));
    $("#button2").val(Math.floor((Math.random()*12)+1));
    $("#button3").val(Math.floor((Math.random()*12)+1));    
    $("#button4").val(Math.floor((Math.random()*12)+1));
    $("#winrecord").text("Wins: "+wins);
    $("#lossrecord").text("Losses: "+losses);
}
$(".crystal").on("click", function(){
    score += parseInt($(this).val());
    console.log(score);
    $("#current").text(score);
    if(score == target){
    wins++;
    reset();
    
}
else if(score > target){
    losses++;
    reset();
    
}

})

reset();