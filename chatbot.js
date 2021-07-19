
var Bot = document.getElementById("Bot");//sous menu maths

function Chatbotcacher(){

	if(getComputedStyle(Bot).display !="none"){
		Bot.style.display ="none";
	} else{
		Bot.style.display ="block";
	
	
	}}
    
var b = document.getElementById("Botblabla"); //

    function getValue() {
        var inputV = document.getElementById("in").value;
        document.getElementById('in').value=""; //supprime ce qu'il y a dans l'input
       
        let newP = document.createElement('p'); //créer le nouvel élément paragraphe
        newP.setAttribute("class","DemUser"); // ajouter class = DemUser 
        let newBullU = document.createElement('div');
        newBullU.setAttribute("class","BullU");
        newP.textContent = inputV;       //Remplie le nouveau paragraphe avec le contenu de l'input
       
       
        b.append(newBullU);                  //ajoute au DOM le paragraphe
        newBullU.append(newP);
        newP.scrollIntoView(); //descend la scrollbar automatiquement pour rentre visible l'élément
        setTimeout(() => {Reponse(inputV);}, 1000); //sitepoint.com/delay   attend 1s puis envoie la fonction de reponse du bot
        console.log(inputV);
        
       
    }


    //code venant de https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter
    var input = document.getElementById("in");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("BE").click();
      }
    });


    function Reponse(demande){
        demande = demande.toLowerCase(); //eviter les soucis de comparaison a la case
        let newPbot = document.createElement('p');
        newPbot.setAttribute("class","Repbot");

        let newBulle = document.createElement('div');
        newBulle.setAttribute("class","BulleBot");
        if(demande == "bonjour" ||demande == "salut" ){
        
        newPbot.textContent = "Bonjour à toi. Je suis Botty et je suis à ton service. Je suis désolé mais je ne suis pas très intelligent.. je suis aussi intelligent que mon créateur pour tout te dire alors ne me demande pas des choses trop compliqué !";     
        
        }
        else{
        newPbot.textContent = "Je n'ai pas compris, désolé je suis en cours de programmation !";     
        }

        b.append(newBulle);
        newBulle.append(newPbot);
        newPbot.scrollIntoView();
    }