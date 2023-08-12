let fotos = {
       1: document.getElementById('foto1'),
       2: document.getElementById('foto2'),
       3: document.getElementById('foto3'),
       4: document.getElementById('foto4'),
       5: document.getElementById('foto5'),
       6: document.getElementById('foto6'),
}

function sortear(){
    let computador = 0;
    let player = 0
    for (let idx = 1; idx<4; idx++){
        sorteado = Math.floor(Math.random()*(6-1) +1)
        computador +=sorteado
        if (sorteado == 6){
            fotos[idx].src="./images/dice6.png"        
        }else if (sorteado == 5){
            fotos[idx].src="./images/dice5.png"        
        }else if (sorteado == 4){
            fotos[idx].src="./images/dice4.png"        
        }else if (sorteado == 3){
            fotos[idx].src="./images/dice3.png"        
        }else if (sorteado == 2){
            fotos[idx].src="./images/dice2.png"        
        }if (sorteado == 1){
            fotos[idx].src="./images/dice1.png"        
        } 
    }
    for (let idx = 4; idx<7; idx++){
        sorteado = Math.floor(Math.random()*(6-1) +1)
        player += sorteado
        if (sorteado == 6){
            fotos[idx].src="./images/dice6.png"        
        }else if (sorteado == 5){
            fotos[idx].src="./images/dice5.png"        
        }else if (sorteado == 4){
            fotos[idx].src="./images/dice4.png"        
        }else if (sorteado == 3){
            fotos[idx].src="./images/dice3.png"        
        }else if (sorteado == 2){
            fotos[idx].src="./images/dice2.png"        
        }if (sorteado == 1){
            fotos[idx].src="./images/dice1.png"        
        } 
    }
    setTimeout(() => {
        if(player>computador){
            alert(`Jogador ${player} X ${computador} Computador`)
        }else if(computador>player){
            alert(`Computador ${computador} X ${player} Player`)
        }else{
            alert(`Empate de ${player}`)
        }
    }, 130);


}

