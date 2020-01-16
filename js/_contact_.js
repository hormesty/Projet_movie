document.getElementById('contactForm').addEventListener('submit', onSubmit, false);
var contactMail = document.getElementById('contactMail');
var contactName = document.getElementById('contactName');
var contactFirstName = document.getElementById('contactFirstName');
var buttonSend = document.getElementById('buttonSubmit');
var commentary = document.getElementById('commentary');



function onSubmit(event){
    event.preventDefault();
    var aaa = formulaire.elements.contactMail.value;
    console.log(aaa);
    firebase.database().ref('users/' + userId).set({
        commentary: commentaires,
      });
    
}




/*Récupérer des données
ref.on('value', function(data){
    console.log(data.val());
})

ref.once('value', function(data){
    console.log(data.val());
})

ref.on('child-added', function(data){
    console.log(data.val());
})*/


//}
