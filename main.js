window.addEventListener("load", function() {
    document.getElementById("frog").addEventListener("click", playFrog);

    function playFrog() {
        var audio = document.getElementById("frogAudio");
        audio.play();
    }

    document.getElementById("mushroom").addEventListener("click", playMushroom);
  
    function playMushroom() {
        var audio = document.getElementById("mushroomAudio");
        audio.play();
    }
    
    document.getElementById("tomnook").addEventListener("click", playTomnook);
  
    function playTomnook() {
        var audio = document.getElementById("tomnookAudio");
        audio.play();
    }

    document.getElementById("troll").addEventListener("click", playTroll);
  
    function playTroll() {
        var audio = document.getElementById("trollAudio");
        audio.play();
    }

    document.getElementById("rat").addEventListener("click", playRat);
  
    function playRat() {
        var audio = document.getElementById("ratAudio");
        audio.play();
    }

    document.getElementById("koopa").addEventListener("click", playKoopa);
  
    function playKoopa() {
        var audio = document.getElementById("koopaAudio");
        audio.play();
    }
  })
