import Dados from "./Dados"

function Start() {
  const iniciar = () => {
    Dados.programa = prompt('Digite o código do programa(021 a 025):', '')

    if(Dados.programa == '021') {
      Dados.gabarito = Dados.gabarito021
      Dados.pergunta = 1
    }
    else if(Dados.programa == '022') {
      Dados.gabarito = Dados.gabarito022
      Dados.pergunta = 31
    }
    else if(Dados.programa == '023') {
      Dados.gabarito = Dados.gabarito023
      Dados.pergunta = 61
    }
    else if(Dados.programa == '024') {
      Dados.gabarito = Dados.gabarito024
      Dados.pergunta = 91
    }
    else if(Dados.programa == '025') {
      Dados.gabarito = Dados.gabarito025
      Dados.pergunta = 121
    }
    else {
      alert('Código de programa inválido!\nDigite um código entre 021 e 025')
      iniciar()
    }

    Dados.tentativa = 1
    Dados.pontuacao = 0

    document.getElementById('tela1').value = `${Dados.programa}->${Dados.pergunta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`
    document.getElementById('tela2').style.border = 'black 1px solid'
  }

  return(
    <p><input type="button" id="start" value="START/RESET" onClick={iniciar} /></p>
  )
}

export default Start