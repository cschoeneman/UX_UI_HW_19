var modal = document.getElementById('resumeModal'); //modal
var resButton = document.getElementById("resumeButton"); //resume button
var closeX = document.getElementsByClassName("close")[0];

//clicking resumeButton opens modal
$(resButton).on("click", function(){
    modal.style.display = "block";
})

//clicking X closes modal
$(closeX).on("click", function(){
    modal.style.display = "none";
})

//click outside modal, closes modal
$(window).on("click", function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

