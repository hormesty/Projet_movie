
window.onload = function(){//attend le chargement de la page html complète
    initApp();
    }

function initApp(){
    var answer = localStorage.getItem('keyword');
    console.log(answer);

    $('a').click(function(){
        var memory = this.id;
        console.log(memory);
        //créer un item dans localStorage(keyword = variable memory)
        localStorage.setItem('keyword', memory);
    });

    var xxx = firebase.database().ref('article + images + titres /')

    xxx.once('value').then(function(data) {

        
        var lesArticles = data.val();
        console.log(lesArticles);
        
        
        $.each(lesArticles, function(i,data){//parcours la BDD d'objet en objet et lance une fonctions
        console.log(i.data);
        var categorie_a_remplacer = document.getElementById('genre');

        var image_a_remplacer1 = document.getElementById('image_a_remplacer1');
        var image_a_remplacer2 = document.getElementById('image_a_remplacer2');
        var image_a_remplacer3 = document.getElementById('image_a_remplacer3');
        var image_a_remplacer4 = document.getElementById('image_a_remplacer4');
        var image_a_remplacer5 = document.getElementById('image_a_remplacer5');

        var titre_a_remplacer1 = document.getElementById('replaceTitle1');
        var titre_a_remplacer2 = document.getElementById('replaceTitle2');
        var titre_a_remplacer3 = document.getElementById('replaceTitle3');
        var titre_a_remplacer4 = document.getElementById('replaceTitle4');
        var titre_a_remplacer5 = document.getElementById('replaceTitle5');

        var texte_a_remplacer1 = document.getElementById('texte_a_remplacer1');
        var texte_a_remplacer2 = document.getElementById('texte_a_remplacer2');
        var texte_a_remplacer3 = document.getElementById('texte_a_remplacer3');
        var texte_a_remplacer4 = document.getElementById('texte_a_remplacer4');
        var texte_a_remplacer5 = document.getElementById('texte_a_remplacer5');


        categorie_a_remplacer.textContent = data.whatever;

        image_a_remplacer1.src = data.photoArticle;
        image_a_remplacer2.src = data.photoArticle;
        image_a_remplacer3.src = data.photoArticle;
        image_a_remplacer4.src = data.photoArticle;
        image_a_remplacer5.src = data.photoArticle;

        titre_a_remplacer1.textContent = data.title;
        titre_a_remplacer2.textContent = data.title;
        titre_a_remplacer3.textContent = data.title;
        titre_a_remplacer4.textContent = data.title;
        titre_a_remplacer5.textContent = data.title;

        texte_a_remplacer1.textContent = data.article;
        texte_a_remplacer2.textContent = data.article;
        texte_a_remplacer3.textContent = data.article;
        texte_a_remplacer4.textContent = data.article;
        texte_a_remplacer5.textContent = data.article;

        var resizeImage1 = document.querySelector('#image_a_remplacer1');
        var resizeImage2 = document.querySelector('#image_a_remplacer2');
        var resizeImage3 = document.querySelector('#image_a_remplacer3');
        var resizeImage4 = document.querySelector('#image_a_remplacer4');
        var resizeImage5 = document.querySelector('#image_a_remplacer5');

        resizeImage1.setAttribute('height', '400px');
        resizeImage1.setAttribute('width', '250px');

        
        resizeImage2.setAttribute('height', '400px');
        resizeImage2.setAttribute('width', '250px');
        
        
        resizeImage3.setAttribute('height', '400px');
        resizeImage3.setAttribute('width', '250px');

        
        resizeImage4.setAttribute('height', '400px');
        resizeImage4.setAttribute('width', '250px');

        
        resizeImage5.setAttribute('height', '400px');
        resizeImage5.setAttribute('width', '250px');

        });
        // .then(function(){
        //     localStorage.clear();
        //     var answer = localStorage.getItem('keyword');
        //     });




    });
}
