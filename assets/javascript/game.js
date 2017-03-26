

        var alph="abcdefghijklmnopqrstuvwxyz";        
        var randomLetter = "";
        var guessed = [];
        var showitW = document.getElementById("wins");
        var showitL = document.getElementById("losses");
        var showitG = document.getElementById("guessLeft");
        var showit = document.getElementById("guesses");
        var myMess = document.getElementById("mess");
        var restart = document.getElementById("startOver");

        var sticker = "";
        var wins = 0;
        var losses = 0;
        var increment = 1;
        var gPass;
        

        
        showitW.textContent = wins;
        showitL.textContent = losses;
        

        pickRand();


      // start game by pressing any key

      document.onkeyup = function(event) {
        

        sticker = event.key;
        guessed.push(sticker);

        showit.textContent = guessed.toString();
        var typed = (event.key);
        //console.log(typed);
      

          

        if (typed == randomLetter) {
            wins = (wins + increment);
            //console.log(wins);
            showitW.textContent = wins;
            pickRand();

        }
        else {
          //var dec1 = gPass;
          gPass = gPass - increment;
          console.log("gPass =" + gPass);
          console.log("losses = " + losses);
          showitG.textContent = gPass;

        };

if (gPass == 0) {
        myMess.textContent = "Press any key to continue.";

        };

        if (gPass < 0) {

          losses = (losses + 1);
          showitL.textContent = losses;
          pickRand();
        };

        if (losses == 3 && gPass == 0) {
          myMess.textContent = "You're Not a Psychic!!";
          myMess.style.color = "white";

          document.body.style.color = "black";
          document.body.style.backgroundColor = "black";
          restart.textContent = "START OVER";
          restart.style.color = "white";

        };





   };


     function reSt() {
      location.reload();

     };



      function pickRand() {
        myMess.textContent = "What you've guessed so far:";
          var gTot = 5;
          gPass = gTot;
          guessed = [];
          showit.textContent = " ";
          showitG.textContent = gPass;
          var random = Math.floor(Math.random() * (27 - 0) + 0);
          //console.log(random);
          randomLetter = alph.charAt(random);
          console.log(randomLetter);
         




        //var random = Math.floor(Math.random() * (27 - 0) + 0);
        //var random = Math.floor(Math.random() * (999999999 - 99999999)) + 99999999;

        // ... and then dump the random number into our random-number div.
      

        // var newDiv = $("<div>");
        // $("#random-number").prepend(random);


       


};
   

