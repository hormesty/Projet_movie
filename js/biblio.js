function initApp(){


}


window.onload = function(){//attend le chargement de la page html complète
initApp();



}


// recuperer le champs d'un input
var title = $('#title').val();

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
          var photo = $('#profil_pict').children();
          photo[0].src = url;

          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    }


    //ecouteur d'evenement
    $('#newArticle').click(function(){
//lance la fonction apres le click

    });


    //fonction qui ecrit dans la base de données
    function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


//verifie l'etat de l'utilisateur
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

