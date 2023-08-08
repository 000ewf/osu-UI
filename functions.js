document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.querySelector(".snow-container");
    let intervalTime = 200; // Intervalo de 200 milissegundos (0.2 segundos)
    let maxSnowflakes = 100; // Número máximo de flocos de neve na tela
    let currentSnowflakes = 0; // Contador para controlar a quantidade atual de flocos de neve
  
    //cria os flocos de neve
    function createSnowflake() {
      if (currentSnowflakes >= maxSnowflakes) {
        return; // Se atingir o limite, não crie mais flocos de neve
      }
  
     //cria uma div no corpo  
     const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowContainer.appendChild(snowflake);
  
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
        currentSnowflakes--; // Diminui o contador quando um floco de neve é removido
      });
  
      currentSnowflakes++; // Aumenta o contador ao criar um novo floco de neve
    }
  
    function generateSnow() {
      setInterval(createSnowflake, intervalTime);
    }
  
    generateSnow();
  });


const osu = document.querySelector(".osu");

osu.addEventListener("click", add);

let maxButtons = 3;
let currentButtons = 0;

function add(){

    if(currentButtons >= maxButtons){
        return currentButtons--;
    }

    const botoes = document.createElement("button");
    botoes.classList.add("play");
    
    botoes.style.animationDuration = 2;
    osu.appendChild(botoes);
    botoes.style.display = "flex";
botoes.style.maxWidth = "320px";
    botoes.style.justifyContent = "right";

    botoes.addEventListener("animationend", () =>{
        botoes.remove();
        --currentButtons;

    })

}
function generateButtons(){ 
    setinterval(()=>add(),500)
}
generateButtons();