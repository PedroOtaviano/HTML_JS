const form = document.getElementById("form");


    form.addEventListener("submit", function(e) {
        e.preventDefault();
    
        console.log("Formulário enviado");
    
        // Converte os valores para números
        const NumeroA = parseInt(document.querySelector(".numberA").value, 10);
        const NumeroB = parseInt(document.querySelector(".numberB").value, 10);
    
        const mensagem = `Número A: ${NumeroA} e Número B: ${NumeroB}`;
        
        
        if (NumeroA > NumeroB) {
            document.querySelector(".error").style.display = "block";
        } else if (NumeroA === NumeroB) {
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