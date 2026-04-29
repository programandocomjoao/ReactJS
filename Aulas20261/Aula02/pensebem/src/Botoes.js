import Dados from "./Dados"

function Botoes() {
  const jogar = (resposta) => { 
    document.getElementById('tela1').value = `${Dados.programa}->${Dados.pergunta}:${resposta}`

    if(resposta == Dados.gabarito[Dados.pergunta-1]) {
      document.getElementById('tela2').style.border = 'green 3px solid'

      if(Dados.tentativa == 1)
        Dados.pontuacao += 3
      else if(Dados.tentativa == 2)
        Dados.pontuacao += 2
      else if(Dados.tentativa == 3)
        Dados.pontuacao++

      Dados.pergunta++
      Dados.tentativa = 1
    }
    else {
      document.getElementById('tela2').style.border = 'red 3px solid'

      Dados.tentativa++

      if(Dados.tentativa > 3) {
        Dados.pergunta++
        Dados.tentativa = 1
      }
    }

    document.getElementById('tela1').value = `${Dados.programa}->${Dados.pergunta}:${resposta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`

    if(Dados.pergunta > 5) {
      document.getElementById('tela1').value = '***FIM***'
      document.getElementById('tela2').value = `Pontuação: ${Dados.pontuacao}`
    }
  }

  return(
    <p>
      <input type="button" class="botao" id="botaoA" value="A" onClick={() => jogar('A')} />
      <input type="button" class="botao" id="botaoB" value="B" onClick={() => jogar('B')} />
      <input type="button" class="botao" id="botaoC" value="C" onClick={() => jogar('C')} />
      <input type="button" class="botao" id="botaoD" value="D" onClick={() => jogar('D')} />
    </p>
  )
}

export default Botoes