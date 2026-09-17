import Dados from "./Dados"

function Start() {
  const iniciar = () => {
    Dados.programa = prompt('Digite o código do programa(051 a 055):', '')

    if(Dados.programa == '051') {
      Dados.gabarito = Dados.gabarito051
      Dados.pergunta = 1
    }
    else if(Dados.programa == '052') {
      Dados.gabarito = Dados.gabarito052
      Dados.pergunta = 31
    }
    else if(Dados.programa == '053') {
      Dados.gabarito = Dados.gabarito053
      Dados.pergunta = 61
    }
    else if(Dados.programa == '054') {
      Dados.gabarito = Dados.gabarito054
      Dados.pergunta = 91
    }
    else if(Dados.programa == '055') {
      Dados.gabarito = Dados.gabarito055
      Dados.pergunta = 121
    }
    else {
      alert('Código de programa inválido!\nDigite um código entre 051 e 055!')
      iniciar()
    }

    Dados.tentativa = 1
    Dados.pontuacao = 0
    Dados.i = 0

    document.getElementById('tela1').value = `${Dados.programa}->${Dados.pergunta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`
    document.getElementById('tela2').style.border = 'black 3px solid'
  }

  return(
    <p><input type="button" id="start" value="START/RESET" onClick={iniciar} /></p>
  )
}

export default Start