function initApp(){//ici le code qui s'executera au chargement de la page

//verifie l'etat de l'utilisateur
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('connecté');
    //gerer l'ajout d'image

    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var auth = firebase.auth();
      var storageRef = firebase.storage().ref();
      var file = evt.target.files[0];

      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        snapshot.ref.getDownloadURL().then(function(url) {
          var photo = $('#pict').children();
          photo[0].src = url;

          

          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    }// fin de handleFileSelect

    //ecoute du bouton pour rajouter une photo
    document.getElementById('file').addEventListener('change', handleFileSelect, false);

        //au click de 
    $('#newArticle').click(function(){
      //lance la fonction apres le click
      var title = $('#title').val();
      var article = $('#article').val();
      var whatever = $('#whatever').val();
      var photo = $('#pict').children();
      var keyword = $('#keyword').val();
      // console.log(photo);
      var url =  photo[0].src;
      // console.log(photo[0]);
      // console.log(url);

      // console.log(title + ' ' + article + ' ' + whatever);
          //fonction qui ecrit dans la base de données
    function writeArticle() {
      firebase.database().ref('article + images + titres /').push({
        title : title,
        article: article,
        whatever: whatever,
        photoArticle: url,
        motCle: keyword
      });
    }
    writeArticle();
    });
    // ...
  } else {
    // User is signed out.
    console.log('déconnecté');

    //redirige l'utilisateur sur la page index.html
    window.location = "index.html";
  }
});

}//fin initApp


var answer = localStorage.getItem('keyword');
console.log(answer);

firebase.database().ref('article + images + titres /').once('value').then(function(snapshot) {
  var BDD = snapshot.val();
  console.log(BDD);
  $.each(BDD, function(i,data){//parcours la BDD d'objet en objet et lance une fonction
  if(data.motCle == answer){
    $('#title').html(data.title);
    $('#article').html(data.article);
    console.log(data.article);
    $('#whatever').html(data.whatever);
    $( "#jpp" ).attr( "src", data.photoArticle);
    


    var img = document.getElementsByClassName('img');
    var titre = document.getElementsByClassName('title');
    var article = document.getElementsByClassName('article');
    var nom_categorie = document.getElementById('genre');
    var keyword = document.getElementsByClassName('keyword');



    // var replaceTitle = ;
    var replaceImg = img.src;
    // var replaceCategory = ;
    // var replaceArticle = ;

    img.src = data.photoArticle;
    console.log(img.src);
  }


  });
});



    // var imageDisplay = firebase.database().ref('article + images + titres /')
    // imageDisplay.on('value', function(snapshot) {
    //     updateStarCount(postElement, snapshot.val());
    //   });





    // var img = document.getElementById("img");
    // var httpsReference = storage.refFromURL("https://firebasestorage.googleapis.com/v0/b/projet-movie-discover.appspot.com/o/images%2Fhorreur-2.jpg?alt=media&token=f876ce4e-d57f-4364-8c90-6d71af8b3163");
    // img.value = httpsReference;





window.onload = function(){//attend le chargement de la page html complète
initApp();
}