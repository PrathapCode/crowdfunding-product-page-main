    //////// MODAL-CONTAINER //////////
document.querySelector(".back-this-project").addEventListener("click" , function(){
    document.querySelector(".modal-container").style.visibility = "visible";
})

// document.querySelector(".modal-container").style.visibility = "visible";


    //////// CLOSE-CROSS ///////////
document.querySelector(".cross-modal").addEventListener("click" , function() {
    document.querySelector(".modal-container").style.visibility = "hidden";
})

    ////////MODAL- BAMBOO STAND ////////
document.getElementById("bamboo-stand").addEventListener("click" , function() {
    document.querySelector(".show-one").style.display = "block";
    document.querySelector(".show-two").style.display = "none";
    document.querySelector(".show-three").style.display = "none";
})

    //////// MODAL- BLACK EDITION ////////
document.getElementById("black-edition").addEventListener("click" , function() {
    document.querySelector(".show-two").style.display = "block";
    document.querySelector(".show-one").style.display = "none";
    document.querySelector(".show-three").style.display = "none";
})

    //////// MODAL- MAHAGONY ////////
document.getElementById("mahagony").addEventListener("click" , function() {
    document.querySelector(".show-three").style.display = "block";
    document.querySelector(".show-one").style.display = "none";
    document.querySelector(".show-two").style.display = "none";
})


    ///////// BOOKMARK ///////////
document.querySelector(".bookmark").addEventListener("click" , function() {
    document.querySelector(".bookmark-image").style.filter = "invert(20%) sepia(13%) saturate(7136%) hue-rotate(151deg) brightness(92%) contrast(101%)";
    document.querySelector(".bookmark-button").style.color = "hsl(176, 72%, 28%)";
    document.querySelector(".bookmark-button").innerHTML = "Bookmarked";
})


    /////////// SUCCESS POPUP ////////
document.querySelector(".continue-one").addEventListener("click" , function() {
    document.querySelector(".success").style.visibility = "visible"
    document.querySelector(".modal-container").style.visibility = "hidden";
})

document.querySelector(".continue-two").addEventListener("click" , function() {
    document.querySelector(".success").style.visibility = "visible"
    document.querySelector(".modal-container").style.visibility = "hidden";
})

document.querySelector(".continue-three").addEventListener("click" , function() {
    document.querySelector(".success").style.visibility = "visible"
    document.querySelector(".modal-container").style.visibility = "hidden";
})


    ////////// GIT-IT CLICK ///////////
document.querySelector(".got-it").addEventListener("click" , function() {
    document.querySelector(".success").style.visibility = "hidden";
})

   /////////// MENU-BAR AND CROSS ///////
document.querySelector(".menu-bar").addEventListener("click" , function() {
    document.querySelector(".help").style.display = "block";
    document.querySelector(".cross").style.display = "block";
    document.querySelector(".menu-bar").style.display = "none";

})

document.querySelector(".cross").addEventListener("click" , function() {
    document.querySelector(".help").style.display = "none";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".menu-bar").style.display = "block";
})
 
   //////////  SELECT REWARD  //////////
document.querySelector(".select-reward-one").addEventListener("click" , function() {
    document.getElementById("bamboo-stand").click();
    document.querySelector(".modal-container").style.visibility = "visible";
    document.querySelector(".show-one").style.display = "block";
    document.querySelector(".show-two").style.display = "none";
    document.querySelector(".show-three").style.display = "none";
})

document.querySelector(".select-reward-two").addEventListener("click" , function() {
    document.getElementById("black-edition").click();
    document.querySelector(".modal-container").style.visibility = "visible";
    document.querySelector(".show-two").style.display = "block";
    document.querySelector(".show-one").style.display = "none";
    document.querySelector(".show-three").style.display = "none";
})

document.querySelector(".select-reward-three").addEventListener("click" , function() {
    document.getElementById("mahagony").click();
    document.querySelector(".modal-container").style.visibility = "visible";
    document.querySelector(".show-three").style.display = "block";
    document.querySelector(".show-one").style.display = "none";
    document.querySelector(".show-two").style.display = "none";


})



