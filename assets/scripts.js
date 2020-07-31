var tabuleiro = {
    jogador1 : {
        nome: 'Raphael',
        simbolo: 'X'
    },
    jogador2 : {
        nome: 'Yara',
        simbolo: 'O'
    },
    jogadorAtual: 1,
    iniciarPartida(){
        document.querySelector('.jogadorAtual').innerHTML = tabuleiro.jogador1.nome        
    },
    jogar: function(posicao){
        
        if(tabuleiro.verificarPosicao(posicao)){
            if(tabuleiro.jogadorAtual == 1){
                tabuleiro.jogadorAtual ++
                posicao.innerHTML = tabuleiro.jogador1.simbolo
                document.querySelector('.jogadorAtual').innerHTML = tabuleiro.jogador2.nome
            } else {
                tabuleiro.jogadorAtual --
                posicao.innerHTML = tabuleiro.jogador2.simbolo
                document.querySelector('.jogadorAtual').innerHTML = tabuleiro.jogador1.nome
            } 
        }

        if(tabuleiro.validarJogada()){
            console.log('Temos um vencedor')
        }
    },
    verificarPosicao(posicao){
        if(posicao.textContent){
            return false
        }
        return true;
    },
    validarJogada(){
        
        var posicoes = document.querySelectorAll(".posicao");

        if(posicoes[0].textContent == posicoes[1].textContent && posicoes[1].textContent == posicoes[2].textContent){
            return true
        }

        if(posicoes[3].textContent == posicoes[4].textContent && posicoes[4].textContent == posicoes[5].textContent){
            return true
        }

        if(posicoes[6].textContent == posicoes[7].textContent && posicoes[7].textContent == posicoes[8].textContent){
            return true
        }

    },
    reiniciarPartida(){

    },
}

tabuleiro.iniciarPartida()

document.querySelectorAll(".posicao").forEach(function(posicao){
    posicao.addEventListener("click",function(){
        tabuleiro.jogar(posicao)
    })
})
