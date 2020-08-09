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
        document.querySelector('.jogador-atual').innerHTML = tabuleiro.jogador1.nome        
    },
    jogar: function(posicao){
        
        if(tabuleiro.verificarPosicao(posicao)){
            if(tabuleiro.jogadorAtual == 1){
                tabuleiro.jogadorAtual ++
                posicao.innerHTML = tabuleiro.jogador1.simbolo
                document.querySelector('.jogador-atual').innerHTML = tabuleiro.jogador2.nome
            } else {
                tabuleiro.jogadorAtual --
                posicao.innerHTML = tabuleiro.jogador2.simbolo
                document.querySelector('.jogador-atual').innerHTML = tabuleiro.jogador1.nome
            } 
        }

        if(tabuleiro.validarJogada()){
            console.log('Temos um vencedor')
            tabuleiro.reiniciarPartida()
        }
    },
    verificarPosicao(posicao){
        if(posicao.textContent){
            return false
        }
        return true;
    },
    validarPosicoes(px){
        if(px == 'XXX' || px == 'OOO'){
            return true
        }
    },
    validarPosicoesHorizontais(posicoes){

        l1 = posicoes[0].textContent + posicoes[1].textContent + posicoes[2].textContent
        l2 = posicoes[3].textContent + posicoes[4].textContent + posicoes[5].textContent 
        l3 = posicoes[6].textContent + posicoes[7].textContent + posicoes[8].textContent
       
        if(tabuleiro.validarPosicoes(l1) || tabuleiro.validarPosicoes(l2) || tabuleiro.validarPosicoes(l3)){
            return true
        }

        return false
    },
    validarPosicoeVerticais(posicoes){

        v1 = posicoes[0].textContent + posicoes[3].textContent + posicoes[6].textContent
        v2 = posicoes[1].textContent + posicoes[4].textContent + posicoes[7].textContent 
        v3 = posicoes[2].textContent + posicoes[5].textContent + posicoes[8].textContent
       
        if(tabuleiro.validarPosicoes(v1) || tabuleiro.validarPosicoes(v2) || tabuleiro.validarPosicoes(v3)){
            return true
        }

        return false

    },
    validarPosicoesDiagonais(posicoes){

        d1 = posicoes[0].textContent + posicoes[4].textContent + posicoes[8].textContent
        d2 = posicoes[2].textContent + posicoes[4].textContent + posicoes[6].textContent 
       
        if(tabuleiro.validarPosicoes(d1) || tabuleiro.validarPosicoes(d2)){
            return true
        }

        return false

    },
    validarJogada(){

        const posicoes = Array.from(document.querySelectorAll(".posicao"))

        return tabuleiro.validarPosicoesHorizontais(posicoes) ||
               tabuleiro.validarPosicoeVerticais(posicoes)    ||
               tabuleiro.validarPosicoesDiagonais(posicoes);
    },
    reiniciarPartida(){
        document.querySelectorAll(".posicao").forEach(function(posicao){
            posicao.textContent = ''
        })
    },
}

tabuleiro.iniciarPartida()

document.querySelectorAll(".posicao").forEach(function(posicao){
    posicao.addEventListener("click",function(){
        tabuleiro.jogar(posicao)
    })
})
