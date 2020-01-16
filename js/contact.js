 function recupvar(event){
    event.preventDefault();
    var formulaire = document.getElementById('contactForm').addEventListener('submit', onSubmit, false)
    var contactMail = document.getElementById('contactMail');
    var contactName = document.getElementById('contactName');
    var contactFirstName = document.getElementById('contactFirstName');
    var buttonSend = document.getElementById('buttonSend');
    var textArea = document.getElementById('textArea');
}

function onSubmit(event){
    event.preventDefault();
    var aaa = $('contactMail').val();
    var bbb = $('contactMail').val();
    var ccc = $('contactMail').val();
    console.log(contactMail.value);
    console.log(contactName.value);
    console.log(contactFirstName.value);
}



window.onload = function(){
    recupvar();
};