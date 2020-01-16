 /**
     * Handles the sign up button press.
     */
    function handleSignIn() {

        var email_connexion = document.getElementById('email_connexion').value;
        var password_connexion = document.getElementById('password_connexion').value;
        if (email_connexion.length < 4) {
          alert('Entrez votre adresse email.');
          return;
        }
        if (password_connexion.length < 4) {
          alert('Entrez votre mot de passe.');
          return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().signInWithEmailAndPassword(email_connexion, password_connexion).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Mauvais mot de passe');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
        // [END createwithemail]
      }
  function logout(){
    firebase.auth().signOut();
  }
  

  function signUp() {

    var email_inscription = $('#email_inscription').val();
    //verif que les 2 passwords sont identiques
    var password_inscription = $('#password_inscription').val();
    var password2_inscription = $('#password2_inscription').val();
    if(password_inscription === password2_inscription){
      if ($('#condition').is(":checked")){
        firebase.auth().createUserWithEmailAndPassword(email_inscription, password_inscription).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('Le niveau de sécurité du mot de passe est trop faible');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
          alert('Votre compte a bien été créé');
        });
        }else{
          alert('Merci de valider les conditions générales !')
        }
  }else{
    alert('Les mots de passe ne correspondent pas !');
  }
  // document.getElementById('create_user').addEventListener('click', signUp, false);
}//fin de signUp




  function initApp(){
          // Listening for auth state changes.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function(user) {
            // [START_EXCLUDE silent]
          if (user) {
            // Si on est connecté
            console.log('connecté');
            // alert('Vous êtes connecté')
                // Get a reference to the Firebase Realtime Database
                firebase.initializeApp(config);
            var chatRef = firebase.database().ref('chat/').push();
                
            // Create an instance of Firechat
            var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
            // If the user is logged in, set them as the Firechat user
        chat.setUser(user.uid, "utilisateur du chat" + user.uid.substr(10, 8));


          } else {
            // si on est pas connecté
            // [END_EXCLUDE]
            console.log('déconnecté');
            // alert('Vous êtes déconnecté')
        ;}
        });
        // [END authstatelistener]
        
        // document.getElementById('logout_connexion').addEventListener('click', logout, false);
  }
  
  
      //en fin de chargement de la page
      window.onload = function() {
        initApp();
        document.getElementById('create_user').addEventListener('click', signUp, false);
        document.getElementById('login_connexion').addEventListener('click', handleSignIn, false);
        document.getElementById('logout_connexion').addEventListener('click', logout, false);
      };