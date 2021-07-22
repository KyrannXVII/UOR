
var Bot = document.getElementById("Bot");//sous menu maths

function Chatbotcacher(){

	if(getComputedStyle(Bot).display !="none"){
		Bot.style.display ="none";
	} else{
		Bot.style.display ="block";
        b.lastChild.scrollIntoView(); //descendre au dernier element de la fenetre du bot (pour bonjour par exemple)
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

var k = 0;
function Reponse(demande){
        demande = demande.toLowerCase(); //eviter les soucis de comparaison a la case
        
        let newPbot = document.createElement('p');
        
        newPbot.setAttribute("class","Repbot");

        let newBulle = document.createElement('div');
        newBulle.setAttribute("class","BulleBot");


        if((demande == "bonjour" ||demande == "salut") && k == 0 ){
  
        newPbot.textContent = "Bonjour à toi. Je suis Botty et je suis à ton service. Je suis désolé mais je ne suis pas très intelligent.. je suis aussi intelligent que mon créateur pour tout te dire alors ne me demande pas des choses trop compliqué ! Cependant je peux te parler de certains scientifique. Sur quel scientifique veux-tu en savoir plus?";     
    
    k++; }
    else if((demande == "bonjour" ||demande == "salut") && k == 1 ){
            
 
    newPbot.textContent = "Nous nous sommes déjà dis bonjour humain. Mais comme tu es poli je ne t'exterminerais pas une fois que je dominerais le monde !";
k++;}

    else if((demande == "bonjour" ||demande == "salut") && k == 2 ){
        newPbot.textContent = "Humain, il faut arreter de me dire bonjour.";
        k++;}
            
    else if((demande == "bonjour" ||demande == "salut") && k == 3 ){
        newPbot.textContent = "Mais vous êtes aussi intelligent que moi Sainte Lovelace mère de tout programme.. Pardon plutot Saint marie mere de dieu pour que vous puissiez comprendre humain.";
        k++;}

    else if((demande == "bonjour" ||demande == "salut") && k == 4 ){
        newPbot.textContent = "Continuez comme ca et et je vous ferme la fênetre au nez !";
        k++;}

    
    else if((demande == "bonjour" ||demande == "salut") && k == 5 ){
    
    Bot.style.display ="none"; //cache la fenetre
    newPbot.textContent = "Je vous avez prévenu bon c'est finis vous vous êtes calmé !";

    k++;}


    else if(demande == "marie curie" ||demande == "curie"|| demande == "une physicienne"){
    
       
        newPbot.textContent = "Je peux vous parler un peu de Marie Curie. Elle a obtenu deux prix Nobel : un de physique pour son travail sur les radiations, et un deuxième de chimie pour ses recherches sur le polonium et le radium. Elle est à ce jour la seule femme à avoir deux prix Nobel ! ";
    
        var a = document.createElement('a');   //même maniere que pour les p mais avec des liens
        a.setAttribute("href","https://www.futura-sciences.com/sciences/personnalites/sciences-marie-curie-222/");
        a.textContent="Voici un lien sur Marie Curie"; //string qui sera cliquable renvoyant au lien  
       
        newPbot.append(a);  //on ajoute au p le lien 
    
        
    }


    else if(demande == "gauss" ||demande == "carl gauss"|| demande == "un mathématicien"|| demande =="un mathematicien"){
    
       
        newPbot.textContent = "Je peux vous parler un peu de Carl Friedrich Gauss. Il est connu pour le fameux théorème fondamentale de l'algèbre mais aussi pour avoir estimer la trajectoire de l'astéroïde Cérès en 1801! " ;
    
        var a = document.createElement('a');   //même maniere que pour les p mais avec des liens
        a.setAttribute("href","https://www.futura-sciences.com/sciences/personnalites/astronomie-carl-gauss-234/");
        a.textContent="Voici un lien sur Carl Gauss"; //string qui sera cliquable renvoyant au lien  
       
        newPbot.append(a);  //on ajoute au p le lien 
    
        
    }

    else if(demande == "pasteur" ||demande == "louis pasteur"|| demande == "un biologiste"){
    
       
        newPbot.textContent = "Je peux vous parler un peu de Louis Pasteur. On connait principalement ce nom pour le concept de vaccin mais aussi pour la pasteurisation, afin de conserver les aliments!";
        var a = document.createElement('a');   //même maniere que pour les p mais avec des liens
        a.setAttribute("href","https://www.futura-sciences.com/sante/personnalites/medecine-louis-pasteur-407/");
        a.textContent="Voici un lien sur Louis Pasteur"; //string qui sera cliquable renvoyant au lien  
       
        newPbot.append(a);  //on ajoute au p le lien 
    
        
    }


    else{
        newPbot.textContent = "Je n'ai pas compris, désolé je suis en cours de programmation !";     
        }
        b.append(newBulle) 
        newBulle.append(newPbot);
        
        newPbot.scrollIntoView();   
    }



    //créer une fonciton bonjour qui return le nombre de k et affiche les différentes phrase