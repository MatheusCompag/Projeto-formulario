const inputs = document.querySelectorAll(".input"); 
const botaoEnviar = document.querySelector('.enviar');
const spans = document.querySelectorAll(".erro-msg")


botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();


    inputs.forEach((input, index) => {
        const span = spans[index];

        if(input.value !== ""){
            input.classList.add("campo-preenchido");
            input.classList.remove("campo-vazio");
            span.style.display = 'none';
        
        } else {
            input.classList.add("campo-vazio");
            input.classList.remove("campo-preenchido");
            span.style.display = 'inline';
        }
    });


    
});


    


