function bouton(){

    var contenuskill = document.querySelector("div#paragraphe1");
    var contenuex = document.querySelector("div#paragraphe2");
    var contenuforma = document.querySelector("div#paragraphe3");
    var contenucrea = document.querySelector("div#paragraphe4");
   
        
    document.querySelector("#skill").addEventListener('mouseover',function essai(){
        console.log(this);
       

        contenuskill.style.display ="block";
        contenuex.style.display ="none";
        contenuforma.style.display="none";
        contenucrea.style.display= "none";


    
    })

    document.querySelector("#exp").addEventListener('mouseover',function essai2(){


        console.log(this);
        contenuskill.style.display ="none";
        contenuex.style.display = "block";
        contenuforma.style.display="none";
        contenucrea.style.display= "none";

        })

    document.querySelector("#formation").addEventListener('mouseover',function essai3(){
        console.log(this);
        var contenuforma = document.querySelector("div#paragraphe3");
        console.log(contenuforma);
        contenuskill.style.display ="none";
        contenuex.style.display = "none";
        contenuforma.style.display="block";
        contenucrea.style.display= "none";

        
        
    
        })

    document.querySelector("#crea").addEventListener('mouseover',function essai4(){
            console.log(this);

            console.log(contenucrea);
            contenuskill.style.display ="none";
            contenuex.style.display = "none";
            contenuforma.style.display= "none";
            contenucrea.style.display= "block";
            })


};