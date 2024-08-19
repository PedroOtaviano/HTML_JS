const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("Formulário enviado");

    const NumeroA = document.querySelector(".numberA").value;
    const NumeroB = document.querySelector(".numberB").value;


    
    if (NumeroA > NumeroB) {
        document.querySelector(".error").style.display = "block";
    } else if (NumeroA == NumeroB) {
        document.querySelector(".equals").style.display = "block";
    } else {
        document.querySelector(".success").style.display = "block";
    }

});

form.addEventListener("click", function(e){
    document.querySelector(".error").style.display = "none";
    document.querySelector(".success").style.display = "none";
    document.querySelector(".equals").style.display = "none";
})