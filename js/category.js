var categorie_action = document.getElementById("#action");
var categorie_horreur = document.getElementById("#horreur");
var categorie_fantastique = document.getElementById("#fantastique");
var categorie_jeunesse = document.getElementById("#jeunesse");
var categorie_comedie = document.getElementById("#comedie");

var categories_film = firebase.database().ref("categories/action/").push({
    
});




  function initApp(){//ici le code qui s'executera au chargement de la page
	var answer = localStorage.getItem('keyword');
    console.log(answer);

    firebase.database().ref('article + images + titres /').once('value').then(function(snapshot) {
        var BDD = snapshot.val();
        console.log(BDD);

        
        $.each(BDD, function(i,data){//parcours la BDD d'objet en objet et lance une fonction
        if(data.motCle == answer){
          var a = $('#title').html(data.title);
          var b =$('#article').html(data.article);
          var c = $('#whatever').html(data.whatever);
          var d = $( "#jpp" ).attr("src", data.photoArticle);
          
      
          // console.log(data.title);
          // console.log(data.artice);
          // console.log(data.photoArticle);
      
      
      
          var titre = document.getElementsByClassName('replaceTitle');
          var nom_categorie = document.getElementById('genre');
          var article = document.getElementsByTagName('p');
          var img = document.getElementsById('jpp');

      
      
      
      
      
          // var replaceTitle = data.title ;
          // var replaceImg = img.src;
          // var replaceCategory = ;
          // var replaceArticle = ;
      
          // img.src = data.photoArticle;
          // console.log(img.src);;
        }
        })
        }).then(function(){
  		localStorage.clear();
  		var answer = localStorage.getItem('keyword');
});

}//fin initApp


window.onload = function(){//attend le chargement de la page html complète
initApp();
}

